"""Grading and aggregation.

Because the harness is teacher-forced, every event is independently gradable
against ground truth. Partial success is therefore natural: the primary score
is per-event accuracy, with secondary views (survival depth, staleness curve,
degradation vs. concurrency) that show *how* an agent fails, not just how much.
"""

from __future__ import annotations

from collections import defaultdict

STALENESS_BUCKETS = ((0, 1), (2, 3), (4, 7), (8, 15), (16, 10 ** 9))


def _staleness(records: list[dict]) -> list[int]:
    """Events since this task last raised (0 for a task's first event)."""
    last_seen: dict[str, int] = {}
    out = []
    for rec in records:
        idx, task = rec["index"], rec["task"]
        out.append(idx - last_seen[task] if task in last_seen else 0)
        last_seen[task] = idx
    return out


def summarize_run(run: dict) -> dict:
    """Metrics for one RunResult dict."""
    records = run["records"]
    n = len(records)
    if n == 0:
        return {
            "episode_id": run["episode_id"], "agent": run["agent"],
            "config": run["config"], "n_events": 0, "accuracy": None,
            "task_completion_rate": None, "mean_first_error_depth": None,
            "accuracy_by_staleness": {}, "truncated": run.get("truncated", False),
            "error": run.get("error"),
        }

    correct = sum(r["correct"] for r in records)

    # Per-task: fully correct tasks, and depth of first error.
    by_task: dict[str, list[dict]] = defaultdict(list)
    for r in records:
        by_task[r["task"]].append(r)
    perfect_tasks = 0
    first_error_depths = []
    for recs in by_task.values():
        errors = [r["depth"] for r in recs if not r["correct"]]
        if errors:
            first_error_depths.append(min(errors))
        else:
            perfect_tasks += 1
            first_error_depths.append(len(recs))  # survived the whole task

    staleness = _staleness(records)
    by_bucket: dict[str, list[bool]] = defaultdict(list)
    for r, s in zip(records, staleness):
        for lo, hi in STALENESS_BUCKETS:
            if lo <= s <= hi:
                label = f"{lo}-{hi}" if hi < 10 ** 9 else f"{lo}+"
                by_bucket[label].append(r["correct"])
                break

    return {
        "episode_id": run["episode_id"],
        "agent": run["agent"],
        "config": run["config"],
        "n_events": n,
        "accuracy": correct / n,
        "task_completion_rate": perfect_tasks / len(by_task),
        "mean_first_error_depth": sum(first_error_depths) / len(first_error_depths),
        "accuracy_by_staleness": {
            k: sum(v) / len(v) for k, v in sorted(by_bucket.items())
        },
        "truncated": run.get("truncated", False),
        "error": run.get("error"),
    }


def aggregate(summaries: list[dict]) -> list[dict]:
    """Group per-run summaries by (agent, n_tasks, schedule, branch flag) and
    average — the headline table."""
    groups: dict[tuple, list[dict]] = defaultdict(list)
    for s in summaries:
        if s["accuracy"] is None:
            continue
        cfg = s["config"]
        key = (s["agent"], cfg["n_tasks"], cfg["schedule"],
               cfg["branch_prob"] > 0)
        groups[key].append(s)
    rows = []
    for (agent, n_tasks, schedule, branched), ss in sorted(groups.items()):
        rows.append({
            "agent": agent,
            "n_tasks": n_tasks,
            "schedule": schedule,
            "branched": branched,
            "runs": len(ss),
            "accuracy": sum(x["accuracy"] for x in ss) / len(ss),
            "task_completion_rate": (
                sum(x["task_completion_rate"] for x in ss) / len(ss)),
            "mean_first_error_depth": (
                sum(x["mean_first_error_depth"] for x in ss) / len(ss)),
        })
    return rows


def format_table(rows: list[dict]) -> str:
    if not rows:
        return "(no results)"
    hdr = ["agent", "n_tasks", "schedule", "branched", "runs",
           "accuracy", "task_done", "1st_err_depth"]
    lines = [" | ".join(hdr), " | ".join("---" for _ in hdr)]
    for r in rows:
        lines.append(" | ".join([
            r["agent"], str(r["n_tasks"]), r["schedule"], str(r["branched"]),
            str(r["runs"]), f"{r['accuracy']:.3f}",
            f"{r['task_completion_rate']:.3f}",
            f"{r['mean_first_error_depth']:.1f}",
        ]))
    return "\n".join(lines)
