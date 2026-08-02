"""Command-line interface.

  mtb gen      generate episodes (single config or a grid file)
  mtb preview  print one episode's prompt for eyeballing
  mtb run      run episodes against agents (oracle / random / OpenRouter models)
  mtb grade    aggregate result files into a summary table
  mtb models   list available OpenRouter models (live query)
"""

from __future__ import annotations

import argparse
import itertools
import json
import sys
from pathlib import Path

from .categories import CATEGORIES
from .episode import SCHEDULES, Episode, build_episode, estimate_tokens
from .grading import aggregate, format_table, summarize_run
from .harness import OpenRouterAgent, OracleAgent, RandomAgent, run_episode


def _episode_configs(args) -> list[dict]:
    if args.grid:
        grid = json.loads(Path(args.grid).read_text())
        keys = ["categories", "n_tasks", "steps_mean", "branch_prob",
                "schedule", "seed"]
        for k in keys:
            if k not in grid:
                sys.exit(f"grid file missing key: {k}")
        return [
            dict(zip(keys, combo))
            for combo in itertools.product(*(grid[k] for k in keys))
        ]
    return [{
        "categories": args.categories.split(","),
        "n_tasks": args.n_tasks,
        "steps_mean": args.steps_mean,
        "branch_prob": args.branch_prob,
        "schedule": args.schedule,
        "seed": args.seed,
    }]


def cmd_gen(args) -> None:
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    for cfg in _episode_configs(args):
        for c in cfg["categories"]:
            if c not in CATEGORIES:
                sys.exit(f"unknown category: {c} (have: {', '.join(CATEGORIES)})")
        ep = build_episode(**cfg)
        est = estimate_tokens(ep.preamble)
        path = out / f"{ep.id}.json"
        path.write_text(json.dumps(ep.to_dict(), indent=1))
        print(f"wrote {path}  ({len(ep.events)} events, "
              f"~{est} preamble tokens)")


def cmd_preview(args) -> None:
    ep = Episode.from_dict(json.loads(Path(args.episode).read_text()))
    print(ep.preamble)
    print("=== EVENT STREAM (ground truth) ===")
    for ev in ep.events[: args.n_events]:
        print(f"{ev.index:4d}  {ev.prompt_line():60s} -> {ev.task} {ev.expected}")
    if len(ep.events) > args.n_events:
        print(f"... {len(ep.events) - args.n_events} more events")


def _make_agent(name: str, episode: Episode, api_key: str | None):
    if name == "oracle":
        return OracleAgent()
    if name == "random":
        return RandomAgent(episode, seed=episode.config["seed"])
    return OpenRouterAgent(name, api_key=api_key)


def cmd_run(args) -> None:
    ep_paths = sorted(Path(args.episodes).glob("*.json")) \
        if Path(args.episodes).is_dir() else [Path(args.episodes)]
    if not ep_paths:
        sys.exit("no episode files found")
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    agents = args.agents.split(",")
    for ep_path in ep_paths:
        ep = Episode.from_dict(json.loads(ep_path.read_text()))
        for agent_name in agents:
            slug = agent_name.replace("/", "_").replace(":", "_")
            res_path = out / f"{slug}__{ep.id}.json"
            if res_path.exists() and not args.force:
                print(f"skip (exists): {res_path}")
                continue
            agent = _make_agent(agent_name, ep, args.api_key)
            result = run_episode(
                ep, agent, batch_size=args.batch_size,
                max_context_tokens=args.max_context_tokens,
                save_transcript=not args.no_transcript,
            )
            res_path.write_text(json.dumps(result.to_dict(), indent=1))
            s = summarize_run(result.to_dict())
            acc = "n/a" if s["accuracy"] is None else f"{s['accuracy']:.3f}"
            flags = ("[TRUNCATED] " if result.truncated else "") + (
                f"[ERROR: {result.error}] " if result.error else "")
            print(f"{agent_name} on {ep.id}: acc={acc} "
                  f"({s['n_events']} events) {flags}-> {res_path}")


def cmd_grade(args) -> None:
    paths = sorted(Path(args.results).glob("*.json"))
    if not paths:
        sys.exit("no result files found")
    summaries = [summarize_run(json.loads(p.read_text())) for p in paths]
    rows = aggregate(summaries)
    print(format_table(rows))
    if args.json_out:
        Path(args.json_out).write_text(json.dumps(
            {"runs": summaries, "aggregate": rows}, indent=1))
        print(f"\nwrote {args.json_out}")


def cmd_models(args) -> None:
    import requests
    resp = requests.get("https://openrouter.ai/api/v1/models", timeout=30)
    resp.raise_for_status()
    models = resp.json()["data"]
    for m in sorted(models, key=lambda m: m["id"]):
        if args.filter and args.filter.lower() not in m["id"].lower():
            continue
        ctx = m.get("context_length", "?")
        print(f"{m['id']:60s} ctx={ctx}")


def main(argv: list[str] | None = None) -> None:
    p = argparse.ArgumentParser(prog="mtb")
    sub = p.add_subparsers(dest="cmd", required=True)

    g = sub.add_parser("gen", help="generate episodes")
    g.add_argument("--out", default="episodes")
    g.add_argument("--grid", help="JSON grid file (cartesian product)")
    g.add_argument("--categories", default="recipes",
                   help=f"comma-separated from: {','.join(CATEGORIES)}")
    g.add_argument("--n-tasks", type=int, default=5)
    g.add_argument("--steps-mean", type=int, default=12)
    g.add_argument("--branch-prob", type=float, default=0.0)
    g.add_argument("--schedule", choices=SCHEDULES, default="uniform")
    g.add_argument("--seed", type=int, default=1)
    g.set_defaults(func=cmd_gen)

    v = sub.add_parser("preview", help="print an episode's prompt + events")
    v.add_argument("episode")
    v.add_argument("--n-events", type=int, default=30)
    v.set_defaults(func=cmd_preview)

    r = sub.add_parser("run", help="run episodes against agents")
    r.add_argument("--episodes", default="episodes")
    r.add_argument("--out", default="results")
    r.add_argument("--agents", default="oracle",
                   help="comma-separated: oracle, random, or OpenRouter model ids")
    r.add_argument("--batch-size", type=int, default=1)
    r.add_argument("--max-context-tokens", type=int, default=120_000)
    r.add_argument("--api-key", help="OpenRouter key (else $OPENROUTER_API_KEY)")
    r.add_argument("--no-transcript", action="store_true")
    r.add_argument("--force", action="store_true", help="overwrite existing results")
    r.set_defaults(func=cmd_run)

    d = sub.add_parser("grade", help="summarize result files")
    d.add_argument("--results", default="results")
    d.add_argument("--json-out")
    d.set_defaults(func=cmd_grade)

    m = sub.add_parser("models", help="list OpenRouter models")
    m.add_argument("--filter")
    m.set_defaults(func=cmd_models)

    args = p.parse_args(argv)
    args.func(args)


if __name__ == "__main__":
    main()
