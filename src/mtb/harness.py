"""Run an episode against an agent (an OpenRouter model, or an offline
oracle/random baseline).

The harness is teacher-forced: whatever the agent answers, the episode
advances along the ground-truth path. This makes every event independently
gradable — see README for why that is the backbone of partial-credit scoring.
"""

from __future__ import annotations

import os
import re
import time
from dataclasses import dataclass

import requests

from .episode import DONE, Episode, Event, batch_events, estimate_tokens, render_batch

OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"

ANSWER_RE = re.compile(r"\b(T\d+)\b\W{0,3}(S\d{1,3}|DONE)\b", re.IGNORECASE)
BARE_RE = re.compile(r"\b(S\d{1,3}|DONE)\b", re.IGNORECASE)


@dataclass
class RunResult:
    episode_id: str
    agent: str
    config: dict
    records: list[dict]
    transcript: list[dict]
    truncated: bool = False
    error: str | None = None

    def to_dict(self) -> dict:
        return self.__dict__.copy()


class OracleAgent:
    """Answers from ground truth. Used to validate the harness end-to-end."""

    name = "oracle"

    def reply(self, messages: list[dict], batch: list[Event]) -> str:
        return "\n".join(f"{ev.task} {ev.expected}" for ev in batch)


class RandomAgent:
    """Answers with a random step id of the right task. Floor baseline."""

    name = "random"

    def __init__(self, episode: Episode, seed: int = 0):
        import random
        self.rng = random.Random(seed)
        self.step_ids = {t.id: list(t.steps) + [DONE] for t in episode.tasks}

    def reply(self, messages: list[dict], batch: list[Event]) -> str:
        return "\n".join(
            f"{ev.task} {self.rng.choice(self.step_ids[ev.task])}" for ev in batch
        )


class OpenRouterAgent:
    def __init__(self, model: str, api_key: str | None = None,
                 temperature: float = 0.0, max_retries: int = 5):
        self.name = model
        self.model = model
        self.api_key = api_key or os.environ.get("OPENROUTER_API_KEY", "")
        if not self.api_key:
            raise RuntimeError("Set OPENROUTER_API_KEY or pass --api-key")
        self.temperature = temperature
        self.max_retries = max_retries

    def reply(self, messages: list[dict], batch: list[Event]) -> str:
        payload = {
            "model": self.model,
            "messages": messages,
            "temperature": self.temperature,
            "max_tokens": 64 + 32 * len(batch),
        }
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "X-Title": "multi-task-bench",
        }
        delay = 2.0
        for attempt in range(self.max_retries):
            try:
                resp = requests.post(OPENROUTER_URL, json=payload,
                                     headers=headers, timeout=120)
            except requests.RequestException:
                if attempt < self.max_retries - 1:
                    time.sleep(delay)
                    delay *= 2
                    continue
                raise
            if resp.status_code == 200:
                body = resp.json()
                if "choices" in body and body["choices"]:
                    return body["choices"][0]["message"]["content"] or ""
                raise RuntimeError(f"OpenRouter error: {body.get('error', body)}")
            if resp.status_code in (429, 500, 502, 503) and attempt < self.max_retries - 1:
                time.sleep(delay)
                delay *= 2
                continue
            raise RuntimeError(
                f"OpenRouter HTTP {resp.status_code}: {resp.text[:500]}")
        raise RuntimeError("unreachable")


def parse_reply(reply: str, batch: list[Event]) -> list[str | None]:
    """Extract one answer per event, in order. Pairs found in the reply are
    consumed greedily: for each event, take the first unused pair whose task
    matches. If the reply contains no `<task> <step>` pairs at all, fall back
    to bare step ids assigned to the events in order. Returns None where no
    answer was found."""
    pairs = [(m.group(1).upper(), m.group(2).upper())
             for m in ANSWER_RE.finditer(reply)]
    if not pairs:
        bare = [m.group(1).upper() for m in BARE_RE.finditer(reply)]
        return [bare[i] if i < len(bare) else None for i in range(len(batch))]
    used = [False] * len(pairs)
    answers: list[str | None] = []
    for ev in batch:
        found = None
        for i, (task, ans) in enumerate(pairs):
            if not used[i] and task == ev.task:
                used[i] = True
                found = ans
                break
        answers.append(found)
    return answers


def run_episode(episode: Episode, agent, batch_size: int = 1,
                max_context_tokens: int = 120_000,
                save_transcript: bool = True) -> RunResult:
    messages: list[dict] = [{"role": "user", "content": episode.preamble}]
    records: list[dict] = []
    truncated = False
    error = None

    context_tokens = estimate_tokens(episode.preamble)
    try:
        for batch in batch_events(episode.events, batch_size):
            user_msg = render_batch(batch)
            context_tokens += estimate_tokens(user_msg)
            if context_tokens > max_context_tokens:
                truncated = True
                break
            messages.append({"role": "user", "content": user_msg})
            reply = agent.reply(messages, batch)
            messages.append({"role": "assistant", "content": reply})
            context_tokens += estimate_tokens(reply)
            for ev, got in zip(batch, parse_reply(reply, batch)):
                rec = ev.to_dict()
                rec["context_tokens"] = context_tokens
                rec["got"] = got
                rec["correct"] = got == ev.expected
                # Unparseable reply that nonetheless contains the expected
                # answer: likely correct-but-misformatted. Scored wrong, but
                # surfaced separately by the grader.
                rec["content_match"] = (
                    got is None and ev.expected in reply.upper())
                records.append(rec)
    except Exception as exc:  # noqa: BLE001 - recorded, not swallowed silently
        error = f"{type(exc).__name__}: {exc}"

    return RunResult(
        episode_id=episode.id,
        agent=agent.name,
        config=episode.config,
        records=records,
        transcript=messages if save_transcript else [],
        truncated=truncated,
        error=error,
    )
