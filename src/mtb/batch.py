"""Offline/batch execution via corrected history.

With history="corrected", every event's context is fully determined by the
episode alone: preamble, then alternating (event line, ground-truth answer)
pairs. So an entire episode can be exported as independent requests in the
OpenAI batch JSONL format, run through a 50%-discounted batch API (or an
offline vLLM instance), and the responses graded afterwards.

Flow:
  mtb export-batch --episodes episodes/ --model openai/gpt-4o-mini --out req.jsonl
  ... submit req.jsonl to the batch API, download the output file ...
  mtb import-batch --episodes episodes/ --responses out.jsonl --out results/
"""

from __future__ import annotations

import json
from pathlib import Path

from .episode import Episode, estimate_tokens
from .harness import RunResult, parse_reply, truth_reply

SEP = "|"


def event_messages(episode: Episode, k: int) -> list[dict]:
    """The exact context for event k under corrected history."""
    messages = [{"role": "user", "content": episode.preamble}]
    for ev in episode.events[:k]:
        messages.append({"role": "user", "content": ev.prompt_line()})
        messages.append({"role": "assistant", "content": truth_reply(ev)})
    messages.append({"role": "user", "content": episode.events[k].prompt_line()})
    return messages


def export_batch(episodes: list[Episode], model: str,
                 temperature: float = 0.0) -> tuple[list[str], int]:
    """Returns (jsonl lines, estimated total prompt tokens)."""
    lines = []
    est = 0
    for ep in episodes:
        for k in range(len(ep.events)):
            messages = event_messages(ep, k)
            est += sum(estimate_tokens(m["content"]) for m in messages)
            lines.append(json.dumps({
                "custom_id": f"{ep.id}{SEP}{k}",
                "method": "POST",
                "url": "/v1/chat/completions",
                "body": {
                    "model": model,
                    "messages": messages,
                    "temperature": temperature,
                    "max_tokens": 96,
                },
            }))
    return lines, est


def _response_content(obj: dict) -> str:
    """Pull the reply text out of one batch-output line (OpenAI batch format,
    with a fallback for plain {custom_id, content} lines)."""
    if "content" in obj:
        return obj["content"] or ""
    body = obj.get("response", {}).get("body", {})
    choices = body.get("choices") or []
    if choices:
        return choices[0].get("message", {}).get("content") or ""
    return ""


def import_batch(episodes: list[Episode], response_lines: list[str],
                 agent_name: str) -> list[RunResult]:
    """Grade batch-output JSONL lines against their episodes."""
    replies: dict[str, dict[int, str]] = {}
    for line in response_lines:
        line = line.strip()
        if not line:
            continue
        obj = json.loads(line)
        ep_id, k = obj["custom_id"].rsplit(SEP, 1)
        replies.setdefault(ep_id, {})[int(k)] = _response_content(obj)

    results = []
    for ep in episodes:
        got_map = replies.get(ep.id)
        if got_map is None:
            continue
        records = []
        missing = 0
        for k, ev in enumerate(ep.events):
            reply = got_map.get(k)
            if reply is None:
                missing += 1
                continue
            got = parse_reply(reply, [ev])[0]
            rec = ev.to_dict()
            rec["context_tokens"] = sum(
                estimate_tokens(m["content"]) for m in event_messages(ep, k))
            rec["got"] = got
            rec["correct"] = got == ev.expected
            rec["content_match"] = got is None and ev.expected in reply.upper()
            records.append(rec)
        results.append(RunResult(
            episode_id=ep.id,
            agent=agent_name,
            config={**ep.config, "history": "corrected", "batch": True},
            records=records,
            transcript=[],
            truncated=False,
            error=f"{missing} responses missing" if missing else None,
        ))
    return results


def load_episodes(path: str) -> list[Episode]:
    p = Path(path)
    files = sorted(p.glob("*.json")) if p.is_dir() else [p]
    return [Episode.from_dict(json.loads(f.read_text())) for f in files]
