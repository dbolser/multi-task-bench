#!/usr/bin/env python3
"""Build docs/data.js (site data) from one or more results directories.

Usage: python scripts/make_site_data.py results-hard [more-dirs...] > docs/data.js
Each run's full per-event records are dropped; only summaries are published.
"""

import json
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))
from mtb.grading import summarize_run  # noqa: E402


def main() -> None:
    dirs = sys.argv[1:] or ["results"]
    summaries = []
    for d in dirs:
        for p in sorted(Path(d).glob("*.json")):
            summaries.append(summarize_run(json.loads(p.read_text())))
    commit = subprocess.run(
        ["git", "rev-parse", "--short", "HEAD"],
        capture_output=True, text=True).stdout.strip()
    out = {"commit": commit, "runs": summaries}
    print("window.MTB_DATA = " + json.dumps(out, indent=1) + ";")


if __name__ == "__main__":
    main()
