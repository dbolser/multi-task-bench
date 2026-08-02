from mtb.episode import build_episode
from mtb.grading import aggregate, summarize_run
from mtb.harness import OracleAgent, RandomAgent, parse_reply, run_episode


def _episode(**kw):
    cfg = dict(categories=["assembly"], n_tasks=5, steps_mean=12,
               branch_prob=0.25, schedule="zipf", seed=11)
    cfg.update(kw)
    return build_episode(**cfg)


def test_oracle_scores_perfectly():
    ep = _episode()
    for batch_size in (1, 4):
        res = run_episode(ep, OracleAgent(), batch_size=batch_size)
        assert len(res.records) == len(ep.events)
        assert all(r["correct"] for r in res.records)
        s = summarize_run(res.to_dict())
        assert s["accuracy"] == 1.0
        assert s["task_completion_rate"] == 1.0


def test_random_scores_below_oracle():
    ep = _episode()
    res = run_episode(ep, RandomAgent(ep, seed=1))
    s = summarize_run(res.to_dict())
    assert 0.0 <= s["accuracy"] < 0.5


def test_parse_reply_formats():
    ep = _episode(n_tasks=2, schedule="round_robin")
    batch = ep.events[:2]  # T1 start, T2 start
    exp = [batch[0].expected, batch[1].expected]
    assert parse_reply(f"T1 {exp[0]}\nT2 {exp[1]}", batch) == exp
    assert parse_reply(f"T1: {exp[0]}, then T2: {exp[1]}", batch) == exp
    assert parse_reply(f"t2 {exp[1]} and t1 {exp[0]}", batch) == exp
    assert parse_reply("no answer here", batch) == [None, None]
    # bare step ids (no task prefix) are accepted in event order
    assert parse_reply(exp[0], batch[:1]) == [exp[0]]
    assert parse_reply(f"{exp[0]}\n{exp[1]}", batch) == exp
    # duplicate task in a batch consumes pairs in order
    twice = [e for e in ep.events if e.task == "T1"][:2]
    ans = parse_reply(f"T1 {twice[0].expected}\nT1 {twice[1].expected}", twice)
    assert ans == [twice[0].expected, twice[1].expected]


def test_context_cap_truncates():
    ep = _episode()
    res = run_episode(ep, OracleAgent(), max_context_tokens=10)
    assert res.truncated
    assert res.records == []


def test_aggregate_groups_by_config():
    runs = [run_episode(_episode(seed=s), OracleAgent()).to_dict()
            for s in (1, 2)]
    rows = aggregate([summarize_run(r) for r in runs])
    assert len(rows) == 1
    assert rows[0]["runs"] == 2
    assert rows[0]["accuracy"] == 1.0
