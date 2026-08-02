"""Episode assembly: a set of tasks, an interleaving schedule, and the fully
precomputed event stream with expected answers (teacher-forced ground truth).
"""

from __future__ import annotations

import random
from dataclasses import dataclass, field

from .tasks import Task, generate_task, render_task

SCHEDULES = ("round_robin", "uniform", "zipf")

DONE = "DONE"

PREAMBLE = """\
You are being tested on your ability to track many procedures at the same time.

Below are the full instructions for {n_tasks} tasks. The tasks will be worked on
in an interleaved order that you cannot predict. Events will arrive one batch at
a time. Each event tells you either that a task is starting, or that a step of a
task was just completed (including the result, when the step was a check with
two possible results).

For every event you must reply with the step that should be performed NEXT for
that task, following that task's instructions and everything you have been told
so far. Reply with one line per event, in the same order as the events, using
exactly this format:

  <task id> <step id>

If the completed step was the task's final step, reply:

  <task id> {done}

Do not include any other text in your replies.

=== TASK INSTRUCTIONS ===

{tasks}
"""


@dataclass
class Event:
    """One raise of one task. kind is "start" or "advance"."""
    index: int
    task: str
    kind: str
    completed_step: str | None
    result: str | None
    expected: str  # next step id, or DONE
    depth: int     # how many steps of this task were completed before this event
    n_alive: int   # tasks still unfinished when this event fired

    def to_dict(self) -> dict:
        return self.__dict__.copy()

    def prompt_line(self) -> str:
        if self.kind == "start":
            return f"{self.task}: start."
        if self.result is not None:
            return (f"{self.task}: step {self.completed_step} done. "
                    f"Result: {self.result}.")
        return f"{self.task}: step {self.completed_step} done."


@dataclass
class Episode:
    id: str
    config: dict
    tasks: list[Task]
    events: list[Event]
    preamble: str = ""

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "config": self.config,
            "tasks": [t.to_dict() for t in self.tasks],
            "events": [e.to_dict() for e in self.events],
            "preamble": self.preamble,
        }

    @classmethod
    def from_dict(cls, d: dict) -> "Episode":
        return cls(
            id=d["id"],
            config=d["config"],
            tasks=[Task.from_dict(t) for t in d["tasks"]],
            events=[Event(**e) for e in d["events"]],
            preamble=d["preamble"],
        )


def estimate_tokens(text: str) -> int:
    """Crude but serviceable: ~4 characters per token."""
    return len(text) // 4 + 1


def _pick_next(kind: str, rng: random.Random, alive: list[str],
               rr_order: list[str], rr_ptr: list[int],
               zipf_weights: dict[str, float]) -> str:
    if kind == "round_robin":
        while True:
            t = rr_order[rr_ptr[0] % len(rr_order)]
            rr_ptr[0] += 1
            if t in alive:
                return t
    if kind == "uniform":
        return rng.choice(alive)
    if kind == "zipf":
        weights = [zipf_weights[t] for t in alive]
        return rng.choices(alive, weights=weights, k=1)[0]
    raise ValueError(f"unknown schedule: {kind}")


def build_episode(
    categories: list[str],
    n_tasks: int,
    steps_mean: int,
    branch_prob: float,
    schedule: str,
    seed: int,
    zipf_s: float = 1.2,
) -> Episode:
    """Build one episode. Tasks are assigned categories round-robin from the
    given list, so a single-category list gives a within-category episode and
    a multi-category list gives a between-category mix."""
    rng = random.Random(seed)
    tasks = [
        generate_task(
            task_id=f"T{i + 1}",
            category_key=categories[i % len(categories)],
            rng=rng,
            steps_mean=steps_mean,
            branch_prob=branch_prob,
        )
        for i in range(n_tasks)
    ]

    # Per-task remaining raises: start event + one per path step (the last of
    # which expects DONE).
    paths = {t.id: t.truth_path() for t in tasks}
    cursor = {t.id: 0 for t in tasks}  # raises consumed so far
    alive = [t.id for t in tasks]
    rr_order = list(alive)
    rr_ptr = [0]
    zipf_weights = {t: 1.0 / (rank + 1) ** zipf_s for rank, t in enumerate(alive)}

    events: list[Event] = []
    while alive:
        tid = _pick_next(schedule, rng, alive, rr_order, rr_ptr, zipf_weights)
        path = paths[tid]
        k = cursor[tid]
        if k == 0:
            ev = Event(
                index=len(events), task=tid, kind="start",
                completed_step=None, result=None,
                expected=path[0][0], depth=0, n_alive=len(alive),
            )
        else:
            done_step, result = path[k - 1]
            expected = path[k][0] if k < len(path) else DONE
            ev = Event(
                index=len(events), task=tid, kind="advance",
                completed_step=done_step, result=result,
                expected=expected, depth=k, n_alive=len(alive),
            )
        events.append(ev)
        cursor[tid] += 1
        if cursor[tid] > len(path):
            alive.remove(tid)

    cat_str = "+".join(sorted(set(categories)))
    ep_id = (f"{cat_str}-n{n_tasks}-m{steps_mean}-b{int(branch_prob * 100):02d}"
             f"-{schedule}-s{seed}")
    config = {
        "categories": categories,
        "n_tasks": n_tasks,
        "steps_mean": steps_mean,
        "branch_prob": branch_prob,
        "schedule": schedule,
        "seed": seed,
        "zipf_s": zipf_s,
    }
    preamble = PREAMBLE.format(
        n_tasks=n_tasks,
        done=DONE,
        tasks="\n\n".join(render_task(t) for t in tasks),
    )
    return Episode(id=ep_id, config=config, tasks=tasks, events=events,
                   preamble=preamble)


def batch_events(events: list[Event], batch_size: int) -> list[list[Event]]:
    return [events[i:i + batch_size] for i in range(0, len(events), batch_size)]


def render_batch(batch: list[Event]) -> str:
    lines = [ev.prompt_line() for ev in batch]
    lines.append("Next step for each of the above, one line each:")
    return "\n".join(lines)
