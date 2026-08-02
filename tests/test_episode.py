from mtb.episode import DONE, Episode, build_episode


def _build(schedule="uniform", n_tasks=4, branch_prob=0.3, seed=5):
    return build_episode(
        categories=["recipes", "repair"], n_tasks=n_tasks, steps_mean=10,
        branch_prob=branch_prob, schedule=schedule, seed=seed,
    )


def test_event_count_and_done():
    ep = _build()
    for task in ep.tasks:
        evs = [e for e in ep.events if e.task == task.id]
        assert len(evs) == len(task.truth_path()) + 1
        assert evs[0].kind == "start"
        assert evs[-1].expected == DONE
        # expected answers trace the truth path in order
        expected_seq = [s for s, _ in task.truth_path()] + [DONE]
        assert [e.expected for e in evs] == expected_seq


def test_round_robin_order():
    ep = _build(schedule="round_robin")
    order = [e.task for e in ep.events[: len(ep.tasks)]]
    assert order == [t.id for t in ep.tasks]


def test_deterministic():
    assert _build(seed=9).to_dict() == _build(seed=9).to_dict()
    assert _build(seed=9).to_dict() != _build(seed=10).to_dict()


def test_roundtrip():
    ep = _build()
    assert Episode.from_dict(ep.to_dict()).to_dict() == ep.to_dict()


def test_categories_assigned_round_robin():
    ep = _build(n_tasks=4)
    assert [t.category for t in ep.tasks] == ["recipes", "repair"] * 2


def test_preamble_mentions_every_step():
    ep = _build()
    for task in ep.tasks:
        assert task.id in ep.preamble
        for sid in task.steps:
            assert sid in ep.preamble
