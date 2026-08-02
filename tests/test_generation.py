import random

from mtb.categories import CATEGORIES
from mtb.tasks import LINEAR, Task, generate_task


def test_deterministic():
    a = generate_task("T1", "recipes", random.Random(42), 12, 0.3)
    b = generate_task("T1", "recipes", random.Random(42), 12, 0.3)
    assert a.to_dict() == b.to_dict()


def test_roundtrip():
    t = generate_task("T1", "repair", random.Random(7), 12, 0.4)
    assert Task.from_dict(t.to_dict()).to_dict() == t.to_dict()


def test_graph_valid_all_categories():
    rng = random.Random(0)
    for cat in CATEGORIES:
        for branch_prob in (0.0, 0.5):
            for _ in range(20):
                t = generate_task("T1", cat, rng, 12, branch_prob)
                assert len(t.steps) >= 3
                terminals = 0
                for step in t.steps.values():
                    if step.next is None:
                        terminals += 1
                    else:
                        for nxt in step.next.values():
                            assert nxt in t.steps
                assert terminals == 1
                # every check has a recorded ground-truth outcome
                for sid, step in t.steps.items():
                    if step.next is not None and LINEAR not in step.next:
                        assert t.outcomes[sid] in step.next


def test_truth_path_terminates_and_covers_checks():
    rng = random.Random(3)
    for _ in range(50):
        t = generate_task("T1", "pipeline", rng, 20, 0.5)
        path = t.truth_path()
        assert path[-1][0] in [s.id for s in t.steps.values() if s.next is None]
        # revealed results appear exactly at check steps on the path
        for sid, result in path:
            step = t.steps[sid]
            if result is None:
                assert step.next is None or LINEAR in step.next
            else:
                assert result in step.next


def test_linear_task_has_no_checks():
    t = generate_task("T1", "journey", random.Random(1), 15, 0.0)
    assert not t.outcomes
    assert len(t.truth_path()) == len(t.steps)
