"""Procedural task generation.

A task is a small directed graph of steps. Linear tasks are a simple chain.
Branched tasks contain "check" steps with two possible results; the bad
result routes through a short side chain that rejoins the main line. Every
task has a single seeded ground-truth path (the result of each check is
predetermined and revealed to the model only when that check completes).
"""

from __future__ import annotations

import random
from dataclasses import dataclass, field

from .categories import CATEGORIES, Category

LINEAR = ""  # outcome key used by non-check steps


@dataclass
class Step:
    id: str
    text: str
    # result -> next step id; {LINEAR: next} for ordinary steps; None = terminal
    next: dict[str, str] | None


@dataclass
class Task:
    id: str
    name: str
    category: str
    branched: bool
    first: str
    steps: dict[str, Step] = field(default_factory=dict)
    # ground-truth result for each check step
    outcomes: dict[str, str] = field(default_factory=dict)

    def truth_path(self) -> list[tuple[str, str | None]]:
        """The realized path: [(step_id, revealed_result_or_None), ...]."""
        path: list[tuple[str, str | None]] = []
        cur: str | None = self.first
        while cur is not None:
            step = self.steps[cur]
            if step.next is None:
                path.append((cur, None))
                break
            if LINEAR in step.next:
                path.append((cur, None))
                cur = step.next[LINEAR]
            else:
                result = self.outcomes[cur]
                path.append((cur, result))
                cur = step.next[result]
        return path

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category,
            "branched": self.branched,
            "first": self.first,
            "steps": {
                s.id: {"text": s.text, "next": s.next} for s in self.steps.values()
            },
            "outcomes": self.outcomes,
        }

    @classmethod
    def from_dict(cls, d: dict) -> "Task":
        return cls(
            id=d["id"],
            name=d["name"],
            category=d["category"],
            branched=d["branched"],
            first=d["first"],
            steps={
                sid: Step(id=sid, text=sd["text"], next=sd["next"])
                for sid, sd in d["steps"].items()
            },
            outcomes=d["outcomes"],
        )


def _draw_length(rng: random.Random, mean: int, sd: float | None = None) -> int:
    """Step count: normal around the mean (sd defaults to mean/4), floor of 3.
    sd=0 gives exactly `mean` steps."""
    if sd is None:
        sd = mean / 4
    if sd <= 0:
        return max(3, mean)
    return max(3, round(rng.gauss(mean, sd)))


def generate_task(
    task_id: str,
    category_key: str,
    rng: random.Random,
    steps_mean: int = 12,
    branch_prob: float = 0.0,
    side_len_max: int = 3,
    steps_sd: float | None = None,
) -> Task:
    """Generate one task. branch_prob is the per-step chance (excluding the
    first and last two spine steps) of becoming a check step."""
    cat: Category = CATEGORIES[category_key]
    n = _draw_length(rng, steps_mean, steps_sd)
    counter = 0

    def new_id() -> str:
        nonlocal counter
        counter += 1
        return f"S{counter:02d}"

    spine_ids = [new_id() for _ in range(n)]
    steps: dict[str, Step] = {}
    for i, sid in enumerate(spine_ids):
        nxt = {LINEAR: spine_ids[i + 1]} if i + 1 < n else None
        steps[sid] = Step(id=sid, text=cat.step_text(rng), next=nxt)

    task = Task(
        id=task_id,
        name=cat.task_name(rng),
        category=category_key,
        branched=branch_prob > 0,
        first=spine_ids[0],
        steps=steps,
    )

    if branch_prob > 0:
        for i in range(1, n - 2):
            if rng.random() >= branch_prob:
                continue
            sid = spine_ids[i]
            rejoin = spine_ids[i + 1]
            text, ok, bad = cat.check(rng)
            side_ids = [new_id() for _ in range(rng.randint(1, side_len_max))]
            for j, side_id in enumerate(side_ids):
                nxt = side_ids[j + 1] if j + 1 < len(side_ids) else rejoin
                steps[side_id] = Step(id=side_id, text=cat.step_text(rng),
                                      next={LINEAR: nxt})
            steps[sid] = Step(id=sid, text=text, next={ok: rejoin, bad: side_ids[0]})
            task.outcomes[sid] = rng.choice([ok, bad])

    return task


def render_task(task: Task) -> str:
    """Human/model-readable instructions for one task."""
    cat = CATEGORIES[task.category]
    lines = [f'{task.id} — {cat.label}: "{task.name}"']
    for sid in sorted(task.steps, key=lambda s: int(s[1:])):
        step = task.steps[sid]
        if step.next is None:
            lines.append(f"  {sid}: {step.text}. (final step)")
        elif LINEAR in step.next:
            lines.append(f"  {sid}: {step.text}. Then go to {step.next[LINEAR]}.")
        else:
            (r1, n1), (r2, n2) = step.next.items()
            lines.append(
                f'  {sid}: {step.text}. If the result is "{r1}", go to {n1}; '
                f'if "{r2}", go to {n2}.'
            )
    return "\n".join(lines)
