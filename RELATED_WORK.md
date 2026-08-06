# Related work

Survey of benchmarks and literature adjacent to multi-task-bench, compiled from
web research on 2026-08-06. Links were live at time of writing; items marked
as snippet-only were not verified beyond abstracts. This document positions
the benchmark and lists the novelty claims we believe are defensible — and the
prior work each must be weighed against.

## 1. Needle-in-a-haystack variants and long-context retrieval benchmarks

- **NIAH** (Kamradt, 2023, informal). Single fact planted in a long distractor
  context, one query. Pure single-hop retrieval of a *static* fact, single
  sparse query — the baseline multi-task-bench moves away from on every axis.
- **[RULER](https://arxiv.org/abs/2404.06654)** (Hsieh et al., NVIDIA, 2024).
  Synthetic long-context suite: multi-key/multi-value/multi-query NIAH with
  distractors, aggregation (CWE/FWE), QA, and — most relevant — **Variable
  Tracking**: follow chains of bindings `X1=12345, X2=X1, X3=X2` and return
  all variables holding a value. VT is multi-hop, but the bindings are
  *static* (written once, never updated), and there is a single query at the
  end. Key overlap with our findings: RULER showed models pass vanilla NIAH
  but degrade with length on everything harder — the "degrades with
  accumulated history" pattern predates multi-task-bench. Difference: no
  evolving state, no dense querying, no interleaved tasks, no termination.
- **[NeedleBench / NeedleBench V2](https://github.com/open-compass/opencompass/blob/main/opencompass/configs/datasets/needlebench_v2/readme.md)**
  (OpenCompass, 2024/2025). Multi-needle retrieval and reasoning; the
  Ancestral Trace Challenge chains relational facts ("needle chain" style).
  Static facts, sparse querying.
- **[Sequential-NIAH](https://arxiv.org/abs/2504.04713)** (2025). Extract
  *ordered sequences* of needles (e.g., steps of a process scattered in the
  haystack) in order. Closest NIAH variant to "procedures in context," but
  the sequence is static content collected once, not a state advanced
  event-by-event.
- **NoLiMa** (2025). NIAH with minimal lexical overlap between question and
  needle. Relevant as evidence that lexical-match retrieval is models'
  default strategy — consistent with our "solved by re-reading the
  transcript" diagnosis (task ids in events are strong lexical anchors).
- **[BABILong](https://arxiv.org/abs/2406.10149)** (Kuratov et al., NeurIPS
  2024). bAbI reasoning embedded in book-length haystacks. Weak
  evolving-state overlap (object locations), but querying is a single
  question and the history is *filler noise*. In multi-task-bench everything
  in the history is a real event from some task — interference comes from
  other signal, not filler. A genuinely different distractor regime worth
  stating explicitly.
- **[LOFT](https://github.com/google-deepmind/loft)** (Lee et al., Google
  DeepMind, 2024). 1M-token retrieval/RAG/SQL/many-shot tasks. Static
  corpora, sparse queries.
- **[HELMET](https://arxiv.org/abs/2410.02694)** (Yen et al., Princeton,
  ICLR 2025). Application-centric long-context meta-benchmark; no
  evolving-state task.
- **[Michelangelo](https://arxiv.org/abs/2409.12640)** (Vodrahalli et al.,
  Google DeepMind, 2024). Latent Structure Queries. Its **Latent List** task
  is the closest single prior task: a long sequence of Python list operations
  whose *final state* must be reported — state as a fold over an update log.
  Crucial differences: one latent structure (not N interleaved), queried once
  at the end, no procedural instructions, no termination concept.
  multi-task-bench can be framed as "Latent List × N, interleaved, densely
  queried, with procedural semantics."

## 2. Long-horizon procedure execution, multi-turn instruction following, interleaved tasking

- **[LongProc](https://princeton-pli.github.io/LongProc/)** (Ye et al., COLM
  2025). Six procedural tasks with long-form output; performance degrades
  with output length. One procedure at a time, one-shot generation, graded on
  whole output rather than per event.
- **[The Illusion of Diminishing Returns: Measuring Long Horizon Execution in
  LLMs](https://arxiv.org/abs/2509.09677)** (Sinha et al., 2025). **The
  closest quantitative framing to our headline findings — must cite.**
  Isolates *execution* by supplying plan and knowledge in context; per-turn
  retrieve-and-update of a single running value. Findings: per-step accuracy
  degrades as steps accumulate; small per-step gains compound into
  exponential horizon gains (the mirror of our clean-completion collapse —
  that collapse is the arithmetic consequence of any per-step error rate, and
  should be framed as confirmation, not novelty); and **self-conditioning**:
  models err more with their own past errors in context. We differ in (1)
  teacher forcing, which removes self-conditioning, so our
  degradation-with-history is attributable to interference/length alone; and
  (2) N interleaved tasks instead of one.
- **[Multi-IF](https://arxiv.org/abs/2410.15553)** (He et al., Meta, 2024).
  3-turn multilingual IFEval; accuracy drops per turn. Cumulative constraints
  on one output, not concurrent evolving tasks.
- **[MultiChallenge](https://labs.scale.com/papers/multichallenge)** (Scale
  AI, 2025). Realistic multi-turn conversations; instruction retention,
  versioned editing. LLM-judged, naturalistic, ~5 turns; not procedural, not
  dense, not controlled.
- **[SIFo](https://arxiv.org/abs/2406.19999)** (2024). Sequential
  instructions, each depending on the previous. Single chain.
- **[IFScale](https://arxiv.org/abs/2507.11538)** (2025). Up to 500
  simultaneous constraints in one generation. Concurrency of *constraints*,
  not of evolving processes.
- **[EIFBench](https://arxiv.org/abs/2506.08375)** (EMNLP 2025). Complex
  single queries with multi-task scenarios — resolved in one shot; no event
  stream. Read in full before claiming interleaving novelty.
- **[EvolIF / "One Battle After Another"](https://arxiv.org/html/2511.03508v1)**
  (2025). Multi-turn IF generator explicitly featuring **interleaved
  topics**, constraint tracking, state changes across turns. Nearest
  multi-turn-IF neighbour; could not verify grading density or per-task
  procedural state — read closely before claiming novelty on "interleaving in
  dialogue."
- **[Task Haystack / Lifelong ICL](https://arxiv.org/abs/2407.16695)** (Xu et
  al., NeurIPS 2024). Streams of interleaved ICL tasks; probes whether each
  task's skill survives. Failures attributed to distraction and recency bias.
  Tasks are static skills to recall, not processes with advancing state;
  sparse probing.
- **[LLM Task Interference](https://arxiv.org/abs/2402.18216)** (Gupta et
  al., EMNLP 2024). Formalizes task-*switch* cost in conversational history.
  The direct LLM switch-cost precedent for our staleness analysis — notable
  that we find staleness *doesn't* matter, contradicting a naive
  switch-cost/decay story and supporting the retrieval interpretation. Cite
  and contrast.
- **[Vending-Bench](https://arxiv.org/abs/2502.15840)** (Andon Labs, 2025).
  Long-horizon agentic coherence; "meltdown" failures uncorrelated with
  context fill. Agentic and uncontrolled — complements our controlled,
  procedurally-generated setting.
- **[Cognitive Load Limits in LLMs (ICE)](https://arxiv.org/abs/2509.19517)**
  (2025). Proposes "context saturation" and "attentional residue"
  (task-switch interference). Small scale; cite for framing vocabulary, not
  empirics.

## 3. Cognitive-science framing

- **Yntema (1963), ["Keeping Track of Several Things at
  Once"](https://www.semanticscholar.org/paper/ae9009eafa87336e0e1db2502aa9c2892adbdbd9)**
  (Human Factors; also Yntema & Trask 1963). **Our exact human paradigm and
  the design's headline citation.** Subjects track several "variables"
  updated in random interleaved order, probed for the most recent value.
  Classic findings: low capacity; *few variables with many states* beats
  *many variables with few states*; recency/interference dominate. The
  modern "keep-track task" (Miyake et al. 2000) descends from it.
  multi-task-bench is Yntema's paradigm with procedural step-state and the
  whole update log visible — which is precisely why it stops being a memory
  test. Yntema's variables-vs-states manipulation is a ready-made experiment
  to import.
- **Complex span / n-back** (Daneman & Carpenter 1980; Kirchner 1958;
  [Conway et al. 2005](https://link.springer.com/article/10.3758/BF03196772)).
  Human WM paradigms interleave storage with processing — the analogue of
  other tasks' events.
- **[Working Memory Capacity of ChatGPT](https://arxiv.org/abs/2305.03731)**
  (Gong et al.) and **[Working Memory Identifies Reasoning Limits in
  LMs](https://aclanthology.org/2024.emnlp-main.938/)** (EMNLP 2024). N-back
  applied to LLMs — but n-back with the stream in context is, like ours,
  formally solvable by transcript retrieval. Same confound.
- **[On the Failure of Latent State Persistence in
  LLMs](https://arxiv.org/abs/2505.10571)** (2025/26). LLMs cannot maintain
  *unexpressed* hidden state across queries; models act as "reactive post-hoc
  solvers." Strongly supports our "retrieval, not state" interpretation — and
  clarifies the distinction: our state is fully reconstructable from context
  (retrieval suffices); LSP tests state that isn't in context at all.
- **Task-switching costs** (Monsell 2003, standard reference). Humans show
  robust switch costs and decay with lag; our null staleness effect is a
  clean *disanalogy* with human memory — models pay an interference cost in
  total history, not per-task decay. One of our most interesting results.

## 4. Chess and the "fold" property

- **[Chess as a Testbed for Language Model State
  Tracking](https://arxiv.org/abs/2102.13249)** (Toshniwal et al., AAAI
  2022). LM state tracking over move sequences; success depends on full
  attention over the entire game history — early evidence transformers track
  state by attending over the whole log.
- **[Chess-World-Model](https://arxiv.org/abs/2605.30100)** (2026).
  10M-game benchmark for exact board-state prediction from move sequences;
  recurrent architectures beat transformers at small scale. Most purely
  isolates the fold property; single-game, endpoint-queried,
  architecture-focused.
- **[Tracking World States with Language Models](https://arxiv.org/html/2508.19851)**
  (2025) and **[PGN2FEN](https://www.aidancooper.co.uk/pgn2fen-benchmark/)**
  (2025). Board-state (FEN) reconstruction from move logs — fold-isolating,
  single game.
- **Playing benchmarks**: [LLM Chess](https://maxim-saplin.github.io/llm_chess/)
  ([paper](https://arxiv.org/pdf/2512.01992)) — agentic play; notably offers
  a "get board" action, which *converts the fold into retrieval*.
  [ChessQA](https://arxiv.org/pdf/2510.23948) (2025). **Kaggle Game Arena**
  ran the Aug 2025 exhibition and maintains chess Elo leaderboards; per
  Google's Feb 2026 update, [Gemini 3 tops the chess Elo
  leaderboard](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/kaggle-game-arena-updates/).
- **Simultaneous games**: we found **no benchmark that has an LLM play or
  track multiple interleaved chess games in one context**. The fold argument:
  board state is `fold(apply, init, moves)` — no single transcript position
  contains the current state, so it is not one-hop retrievable. By contrast a
  linear multi-task-bench task *is* nearly one-hop retrievable (last event
  for task T + its instruction list); branches make it two-hop. This explains
  our findings (retrieval suffices; staleness irrelevant; branches weakest)
  and points to fold-like task updates as the natural hardening.

## 5. Densely-queried evolving state

- **Entity tracking**: Kim & Schuster (2023) boxes-and-objects;
  [MET-Bench](https://arxiv.org/html/2502.10886) (2025);
  ["Do LMs Track Entities Across State Changes?"](https://arxiv.org/html/2605.30233)
  (2026); [Exploring State Tracking Capabilities of
  LLMs](https://arxiv.org/abs/2511.10457) (2025). All single-scenario; sparse
  or per-episode querying.
- **Theory**: "The Illusion of State in State-Space Models" (Merrill, Petty,
  Sabharwal, ICML 2024) and related work: composition-of-permutations state
  tracking is outside TC⁰ — fixed-depth transformers provably cannot compute
  arbitrary folds over long logs in one pass. The theoretical backbone for
  why models substitute retrieval for state maintenance, and why fold-like
  updates would separate the two.
- **Agent memory**: Statler (2023), [STALE](https://arxiv.org/html/2605.06527v1)
  (2026), [MemoBench](https://arxiv.org/html/2606.27537) (2026, snippet
  only), LongMemEval family. Evolving state across sessions, sparse probing.
- **Bottom line**: dense (every-event) grading exists only in single-task
  form. **No benchmark we found grades every event across multiple
  concurrently evolving, interleaved procedures.** That combination appears
  genuinely open.

## Assessment

### What multi-task-bench currently measures vs. a true multitasking/WM probe

As designed — full instructions in context, teacher forcing, exact-match
next-step — the benchmark measures **long-context, interference-limited
retrieval plus local rule application**, not working memory. Nothing must be
*held*: every task's current step is reconstructable from the transcript,
~one-hop for linear tasks. Three signatures confirm it: degradation tracks
total accumulated history (interference over signal-dense context — a regime
distinct from filler-haystack benchmarks); staleness is free (no decay ⇒ no
maintained state); and the failure modes are exactly the places where the
answer is not the (n+1)th instruction line (branches, DONE). The DONE result
is termination-recognition failure (defaulting to the "increment" surface
pattern) — real and under-measured, but instruction-following, not memory.

A true multitasking/WM probe needs at least one of:

1. **Fold-like updates** — relative/permuting operations ("swap the next two
   steps", "redo step 3", chess moves) so current state is not k-hop
   retrievable for small k;
2. **Transcript denial** — sliding-window or no-history conditions, the
   analogue of taking Yntema's written list away;
3. **Controlled interference manipulations** — Yntema's variables-vs-states
   trade-off, distractor similarity;
4. **Free-running rollouts** alongside teacher-forced ones, to measure
   self-conditioning (per Sinha et al.).

Note: the exponential collapse of end-to-end completion is the arithmetic
consequence of any constant per-step error rate — present it as consistent
with Sinha et al., not as an independent discovery.

### Most defensible novelty claims

1. **Dense per-event grading of N concurrently evolving procedural states in
   one context** (prior evolving-state evals are single-process and/or
   endpoint-queried; interleaved-context evals are static-skill or sparse).
2. **Factorial separation of history length, task count, and staleness**,
   yielding the diagnostic that interference — not per-task decay — drives
   degradation: evidence that models retrieve rather than maintain state.
3. **Teacher-forced isolation of tracking from self-conditioning**,
   complementing Sinha et al.
4. **Termination recognition (DONE) as an explicitly measured skill** with a
   characteristic failure mode (step-number incrementing past the end).
5. Procedural generation with controllable length/branching/interleaving — a
   design property shared with RULER/Michelangelo/BABILong; claim as
   property, not novelty.

### Cite carefully / avoid duplicating

- **Sinha et al. (2509.09677)** — frame everything relative to this paper.
- **Michelangelo Latent List** — the fold precedent; differentiate via N
  tasks + dense querying + procedures.
- **Yntema (1963)** — the paradigm's namesake; import variables-vs-states.
- **RULER VT, Task Haystack, LLM Task Interference** — the chained-retrieval,
  interleaved-stream, and switch-cost precedents respectively.
- **Chess state-tracking line + Merrill et al. TC⁰** — cite before any
  fold-family extension.
- **Verify before claiming multi-turn-interleaving novelty**: EvolIF
  (2511.03508), EIFBench (2506.08375).
