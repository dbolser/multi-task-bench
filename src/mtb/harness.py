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

from .episode import DONE, Episode, Event, estimate_tokens

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


class ChatCompletionsAgent:
    """Any OpenAI-compatible /chat/completions endpoint: OpenRouter (default),
    a self-hosted vLLM server, or a provider's own API via base_url."""

    def __init__(self, model: str, api_key: str | None = None,
                 base_url: str | None = None,
                 temperature: float = 0.0, max_retries: int = 9):
        self.name = model
        self.model = model
        self.url = (base_url.rstrip("/") + "/chat/completions"
                    if base_url else OPENROUTER_URL)
        self.api_key = (api_key or os.environ.get("OPENROUTER_API_KEY")
                        or os.environ.get("OPENAI_API_KEY") or "")
        if not self.api_key and self.url == OPENROUTER_URL:
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
        headers = {"X-Title": "multi-task-bench"}
        if self.api_key:
            headers["Authorization"] = f"Bearer {self.api_key}"
        delay = 2.0
        for attempt in range(self.max_retries):
            try:
                resp = requests.post(self.url, json=payload,
                                     headers=headers, timeout=120)
            except requests.RequestException:
                if attempt < self.max_retries - 1:
                    time.sleep(delay)
                    delay = min(delay * 2, 60.0)
                    continue
                raise
            if resp.status_code == 200:
                body = resp.json()
                if "choices" in body and body["choices"]:
                    return body["choices"][0]["message"]["content"] or ""
                # OpenRouter reports some upstream failures as an error object
                # inside an HTTP 200; transient codes are retryable
                err = body.get("error", {})
                if (isinstance(err, dict) and err.get("code") in
                        (408, 429, 500, 502, 503, 504)
                        and attempt < self.max_retries - 1):
                    time.sleep(delay)
                    delay = min(delay * 2, 60.0)
                    continue
                raise RuntimeError(f"OpenRouter error: {err or body}")
            if resp.status_code in (408, 429, 500, 502, 503, 504) and attempt < self.max_retries - 1:
                time.sleep(delay)
                delay = min(delay * 2, 60.0)
                continue
            raise RuntimeError(
                f"OpenRouter HTTP {resp.status_code}: {resp.text[:500]}")
        raise RuntimeError("unreachable")


OpenRouterAgent = ChatCompletionsAgent  # backwards-compatible alias


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


def truth_reply(ev: Event) -> str:
    return f"{ev.task} {ev.expected}"


def run_episode(episode: Episode, agent,
                max_context_tokens: int = 120_000,
                save_transcript: bool = True,
                history: str = "full") -> RunResult:
    """One event per turn, always: a batch of raises would have to come either
    from the teacher or from the model's own memory, and either way the model
    sees the same information — so single-stepping is the only clean protocol.

    history="full" keeps the model's own replies in the conversation;
    history="corrected" replaces each stored assistant turn with the
    ground-truth answer, so the model's errors cannot contaminate later
    events — and every event's context is fully determined in advance
    (which is what makes offline/batch runs possible)."""
    if history not in ("full", "corrected"):
        raise ValueError(f"unknown history mode: {history}")
    messages: list[dict] = [{"role": "user", "content": episode.preamble}]
    records: list[dict] = []
    truncated = False
    error = None

    context_tokens = estimate_tokens(episode.preamble)
    try:
        for ev in episode.events:
            user_msg = ev.prompt_line()
            context_tokens += estimate_tokens(user_msg)
            if context_tokens > max_context_tokens:
                truncated = True
                break
            messages.append({"role": "user", "content": user_msg})
            reply = agent.reply(messages, [ev])
            stored = reply if history == "full" else truth_reply(ev)
            messages.append({"role": "assistant", "content": stored})
            context_tokens += estimate_tokens(stored)
            got = parse_reply(reply, [ev])[0]
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
        config={**episode.config, "history": history},
        records=records,
        transcript=messages if save_transcript else [],
        truncated=truncated,
        error=error,
    )
