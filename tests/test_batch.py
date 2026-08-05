import json

from mtb.batch import event_messages, export_batch, import_batch
from mtb.episode import build_episode
from mtb.grading import summarize_run
from mtb.harness import OracleAgent, RandomAgent, run_episode, truth_reply


def _episode(**kw):
    cfg = dict(categories=["recipes", "pipeline"], n_tasks=4, steps_mean=8,
               branch_prob=0.3, schedule="uniform", seed=3)
    cfg.update(kw)
    return build_episode(**cfg)


def test_corrected_history_stores_ground_truth():
    ep = _episode()
    res = run_episode(ep, RandomAgent(ep, seed=0), history="corrected")
    assistant = [m["content"] for m in res.transcript if m["role"] == "assistant"]
    assert assistant == [truth_reply(ev) for ev in ep.events]
    # grading still uses the agent's actual (mostly wrong) replies
    assert summarize_run(res.to_dict())["accuracy"] < 0.5
    assert res.config["history"] == "corrected"


def test_event_messages_match_corrected_transcript():
    ep = _episode()
    res = run_episode(ep, OracleAgent(), history="corrected")
    k = len(ep.events) - 1
    # the exported context for event k = the live corrected transcript
    # up to (and including) event k's user message
    assert event_messages(ep, k) == res.transcript[: 2 * k + 2]


def test_batch_roundtrip_oracle():
    eps = [_episode(seed=3), _episode(seed=4)]
    lines, est = export_batch(eps, "test/model")
    assert len(lines) == sum(len(ep.events) for ep in eps)
    assert est > 0
    # simulate a batch API that answers every request correctly
    responses = []
    by_id = {ep.id: ep for ep in eps}
    for line in lines:
        req = json.loads(line)
        ep_id, k = req["custom_id"].rsplit("|", 1)
        ev = by_id[ep_id].events[int(k)]
        responses.append(json.dumps({
            "custom_id": req["custom_id"],
            "response": {"body": {"choices": [
                {"message": {"content": truth_reply(ev)}}]}},
        }))
    results = import_batch(eps, responses, "test/model")
    assert len(results) == 2
    for r in results:
        s = summarize_run(r.to_dict())
        assert s["accuracy"] == 1.0
        assert r.error is None


def test_import_batch_reports_missing():
    ep = _episode()
    lines, _ = export_batch([ep], "test/model")
    # answer only the first half of the requests
    half = [json.dumps({"custom_id": json.loads(l)["custom_id"],
                        "content": "T1 S01"})
            for l in lines[: len(lines) // 2]]
    (result,) = import_batch([ep], half, "test/model")
    assert result.error and "missing" in result.error
    assert len(result.records) == len(lines) // 2
