# multi-task-bench

A benchmark for **computational intelligence multi-tasking**: how well can a
model keep track of many procedural tasks at the same time?

The model is given the full instructions for N tasks up front (all within its
context window). The tasks then advance in an interleaved order the model
cannot predict — a step of task 3 completes, then task 1, then task 3 again,
then task 7... For each event the model must answer one question: **what is the
next step for that task?** All ground truth is procedurally generated, so the
benchmark is cheap to scale, impossible to memorize, and self-grading.

## Design

### Tasks

Five categories, each with its own procedural vocabulary:

| key        | flavour                                   |
|------------|-------------------------------------------|
| `recipes`  | cooking steps ("Simmer the lentils")       |
| `repair`   | fixing a device ("Reseat the ribbon cable")|
| `pipeline` | data-pipeline ops ("Deduplicate the orders dataset") |
| `journey`  | travel legs ("Transfer at Central Station")|
| `assembly` | flat-pack assembly ("Bolt on the cross brace") |

Every task is a small directed graph of steps with unique ids (`S01`, `S02`,
...). Two variants:

- **Linear**: a simple chain — `S01 → S02 → ... → Sn`.
- **Branched** (`--branch-prob > 0`): some steps are *checks* with two possible
  results ("Run the diagnostic on the power board. If *passes*, go to S07; if
  *fails*, go to S13"). The bad result routes through a short side chain that
  rejoins the main line. Each check has a seeded ground-truth result, revealed
  to the model only when that check completes.

Step counts are drawn from a normal distribution around `--steps-mean`
(sd = mean/4, floor 3), so "100 recipes with a mean of 12 steps" is one flag.

### Interleaving schedules

Which task raises next is drawn from a schedule:

- `round_robin` — strict cycle through the live tasks
- `uniform` — uniform random over live tasks
- `zipf` — heavy tail: a few tasks raise often, most rarely (`weight ∝ 1/rank^1.2`)

### Episodes

An episode = tasks × schedule × seed, fully precomputed at generation time:
the preamble (all task instructions + answer-format rules) and the complete
event stream with expected answers. Episodes compose freely: within one
category or across several, few long tasks or many short ones, any schedule.
`mtb gen --grid` expands a JSON grid (cartesian product) into an episode set.

### Harness

The harness replays the event stream to the model as a growing chat
conversation, strictly one event per turn. (Batching several events into one
turn was tried and removed: it mostly measures whether a model can chain
multiple steps of the same task inside a single reply, which confounds the
tracking signal — and since a batch's contents come from the teacher either
way, single-stepping shows the model the same information.) The harness is
**teacher-forced**: whatever the model answers, the episode advances along the
ground-truth path. A context budget (`--max-context-tokens`) stops an episode
before it would overflow the model's window; truncated runs are flagged.

Models are called through [OpenRouter](https://openrouter.ai) by default (set
`OPENROUTER_API_KEY`), so one key covers many providers — or any
OpenAI-compatible endpoint via `--base-url`, e.g. a self-hosted
[vLLM](https://docs.vllm.ai) server (whose automatic prefix caching is ideal
for this grow-by-one-turn workload). Two offline agents — `oracle` (reads
ground truth, must score 1.0) and `random` (floor baseline) — let you validate
everything without an API key.

Two history modes: `--history full` (default) keeps the model's own replies in
the conversation; `--history corrected` replaces each stored assistant turn
with the ground-truth answer, so the model's errors cannot contaminate later
events. Corrected history also makes every event's context fully determined in
advance, which enables **offline/batch runs** at batch-API discounts:

```bash
mtb export-batch --episodes episodes/ --model gpt-4o-mini --out req.jsonl
# submit req.jsonl to a batch API (or vLLM offline), download the output, then:
mtb import-batch --episodes episodes/ --responses out.jsonl \
                 --model gpt-4o-mini --out results/
```

### Grading and partial success

Teacher forcing is what makes partial credit well-defined: because the episode
always advances along ground truth, **every event is an independent question
with exactly one right answer**, and an early mistake doesn't poison the rest
of the run. Scores:

- **accuracy** — fraction of events answered correctly (headline number)
- **task completion rate** — fraction of tasks with zero errors end-to-end
- **mean first-error depth** — how many steps into a task the first mistake
  happens (a survival measure)
- **accuracy by staleness** — accuracy bucketed by how many events have passed
  since that task last raised; this is the interference curve, and it's where
  multi-tasking ability actually shows up
- **accuracy by context size** — accuracy bucketed by how large the
  conversation was (estimated tokens) when each question was asked: which
  models get confused earlier or later as history grows
- **errors per task** (`task_error_dist`) — how many tasks get through with
  0 / 1 / 2 / 3+ errors; perfect end-to-end tasks turn out to be rare even at
  ~90% per-event accuracy
- **accuracy by event kind** (`accuracy_by_kind`) — start / advance / branch /
  done broken out separately; cheap models fail the DONE event almost
  universally, answering with the next sequential step id instead of
  recognising the task is finished
- **format diagnostics** — `format_failure_rate` (unparseable replies, scored
  wrong but broken out) and a content-match count for replies that contained
  the right answer in the wrong format

## Usage

```bash
pip install -e ".[dev]"
pytest                                   # all offline, no key needed

# one episode set: 5 mixed-category branched tasks, heavy-tail schedule
mtb gen --categories recipes,repair,pipeline --n-tasks 5 \
        --steps-mean 12 --branch-prob 0.25 --schedule zipf --seed 1

mtb preview episodes/*.json | head -80   # eyeball the prompt + ground truth

# sanity-check the harness offline
mtb run --agents oracle,random
mtb grade

# a real sweep against models (needs OPENROUTER_API_KEY)
mtb gen --grid grids/v1-smoke.json --out episodes-v1
mtb run --episodes episodes-v1 --agents "$(paste -sd, models.txt)" --out results-v1
mtb grade --results results-v1 --json-out summary.json

mtb models --filter claude               # check current OpenRouter model ids
```

`models.txt` holds the default model list — verify the slugs against
`mtb models` before a big run, as OpenRouter ids change over time.

## Results site

`docs/` is a static GitHub Pages site (enable Pages → deploy from branch →
`main` / `docs`). Regenerate its data after a sweep with:

```bash
python scripts/make_site_data.py results-hard > docs/data.js
```

## Roadmap (not in v1)

- **Tool use**: let the model *request* a re-read of a task's instructions
  (paying a cost), instead of getting everything up front.
- **Free-running mode**: advance the episode along the model's *answers*
  rather than ground truth, measuring recovery as well as tracking.
- Distractor events, task cancellation/re-prioritization mid-episode,
  concurrency ramps within a single episode.
