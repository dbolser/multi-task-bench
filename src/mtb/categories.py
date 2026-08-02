"""Task category vocabularies.

Each category supplies procedural text for task names, ordinary steps, and
"check" steps (branch points with two possible results). The text is
deliberately synthetic — the benchmark measures state tracking, not domain
plausibility — but each category has a distinct flavour so cross-category
episodes read as genuinely different kinds of work.
"""

from __future__ import annotations

import random
from dataclasses import dataclass


@dataclass(frozen=True)
class Category:
    key: str
    label: str
    name_adjectives: tuple[str, ...]
    name_nouns: tuple[str, ...]
    name_fmt: str
    verbs: tuple[str, ...]
    objects: tuple[str, ...]
    # (template with {obj}, ok_result, bad_result)
    checks: tuple[tuple[str, str, str], ...]

    def task_name(self, rng: random.Random) -> str:
        return self.name_fmt.format(
            a=rng.choice(self.name_adjectives), b=rng.choice(self.name_nouns)
        )

    def step_text(self, rng: random.Random) -> str:
        return f"{rng.choice(self.verbs)} {rng.choice(self.objects)}"

    def check(self, rng: random.Random) -> tuple[str, str, str]:
        tmpl, ok, bad = rng.choice(self.checks)
        return tmpl.format(obj=rng.choice(self.objects)), ok, bad


CATEGORIES: dict[str, Category] = {}


def _register(cat: Category) -> None:
    CATEGORIES[cat.key] = cat


_register(Category(
    key="recipes",
    label="Recipe",
    name_adjectives=("Rustic", "Smoky", "Golden", "Spiced", "Velvety", "Charred",
                     "Citrus", "Herbed", "Midnight", "Harvest"),
    name_nouns=("Chickpea Stew", "Lentil Soup", "Pepper Ragout", "Saffron Pilaf",
                "Tomato Braise", "Almond Tagine", "Barley Risotto", "Squash Curry",
                "Fennel Gratin", "Mushroom Pie"),
    name_fmt="{a} {b}",
    verbs=("Rinse", "Chop", "Dice", "Sauté", "Simmer", "Whisk", "Fold in",
           "Season", "Toast", "Blanch", "Deglaze with", "Purée", "Strain",
           "Garnish with", "Marinate"),
    objects=("the chickpeas", "the onions", "the garlic", "the saffron threads",
             "the stock", "the lentils", "the tomatoes", "the spinach",
             "the cumin seeds", "the tahini", "the lemon zest", "the rice",
             "the peppers", "the fresh herbs", "the yogurt", "the almonds"),
    checks=(
        ("Taste {obj}", "balanced", "needs adjusting"),
        ("Check the texture of {obj}", "tender", "still firm"),
        ("Check the colour of {obj}", "golden", "too pale"),
    ),
))

_register(Category(
    key="repair",
    label="Repair job",
    name_adjectives=("rattling", "leaking", "overheating", "flickering", "seized",
                     "corroded", "vintage", "misfiring", "sputtering", "wobbly"),
    name_nouns=("dishwasher", "projector", "espresso machine", "bench grinder",
                "furnace", "record player", "sump pump", "treadmill",
                "garage door", "dehumidifier"),
    name_fmt="Fix the {a} {b}",
    verbs=("Unscrew", "Detach", "Inspect", "Clean", "Reseat", "Replace",
           "Tighten", "Lubricate", "Reconnect", "Calibrate", "Label", "Photograph"),
    objects=("the back panel", "the battery pack", "the fan assembly",
             "the ribbon cable", "the power board", "the gasket",
             "the drive belt", "the thermostat", "the intake valve",
             "the filter housing", "the motor mount", "the display connector"),
    checks=(
        ("Run the diagnostic on {obj}", "passes", "fails"),
        ("Measure continuity across {obj}", "continuity", "open circuit"),
        ("Test {obj} under load", "stable", "faulty"),
    ),
))

_register(Category(
    key="pipeline",
    label="Data pipeline",
    name_adjectives=("nightly", "hourly", "quarterly", "streaming", "legacy",
                     "regional", "unified", "incremental", "archival", "realtime"),
    name_nouns=("billing", "clickstream", "inventory", "telemetry", "payroll",
                "recommendations", "fraud-scoring", "geocoding", "attribution",
                "compliance"),
    name_fmt="Run the {a} {b} pipeline",
    verbs=("Ingest", "Validate", "Normalize", "Deduplicate", "Join", "Aggregate",
           "Partition", "Compress", "Index", "Export", "Snapshot", "Backfill"),
    objects=("the user events table", "the clickstream feed", "the orders dataset",
             "the geo lookup table", "the sessions log", "the invoice batch",
             "the metrics stream", "the feature store", "the staging bucket",
             "the audit log", "the vendor extract", "the currency rates feed"),
    checks=(
        ("Run the schema check on {obj}", "conforms", "violations found"),
        ("Compare row counts for {obj}", "counts match", "counts differ"),
        ("Sample-audit {obj}", "clean", "anomalies found"),
    ),
))

_register(Category(
    key="journey",
    label="Journey",
    name_adjectives=("Coastal", "Overnight", "Alpine", "Island", "Cross-border",
                     "Harbour", "Desert", "Lakeside", "Northern", "Old-town"),
    name_nouns=("Loop", "Traverse", "Crossing", "Circuit", "Passage", "Detour",
                "Pilgrimage", "Shortcut", "Expedition", "Return"),
    name_fmt="The {a} {b}",
    verbs=("Walk to", "Take", "Board", "Transfer at", "Check in at", "Depart from",
           "Wait at", "Head to", "Collect luggage at", "Buy a ticket at"),
    objects=("the harbour terminal", "Central Station", "platform 4", "gate B12",
             "the old town hostel", "the river ferry dock", "the coastal bus stop",
             "the north concourse", "the express-train counter",
             "the airport shuttle stand", "the funicular base", "the customs desk"),
    checks=(
        ("Check the departure board at {obj}", "on time", "delayed"),
        ("Ask about seats at {obj}", "seats available", "fully booked"),
        ("Check the weather bulletin at {obj}", "clear", "storm warning"),
    ),
))

_register(Category(
    key="assembly",
    label="Assembly",
    name_adjectives=("Birch", "Walnut", "Modular", "Corner", "Folding", "Studio",
                     "Compact", "Industrial", "Nordic", "Slimline"),
    name_nouns=("Bookcase", "Wardrobe", "Desk", "Bunk Bed", "Shoe Rack",
                "Media Unit", "Workbench", "Greenhouse Frame", "Loft Ladder",
                "Storage Bench"),
    name_fmt="Assemble the {a} {b}",
    verbs=("Attach", "Align", "Insert", "Bolt on", "Slot in", "Fasten", "Mount",
           "Level", "Secure", "Fit", "Clip on", "Glue"),
    objects=("side panel A", "side panel B", "the cross brace", "the shelf pins",
             "the top board", "the cam locks", "the drawer runner",
             "the back sheet", "the leg assembly", "the hinge plates",
             "the dowels", "the anti-tip strap"),
    checks=(
        ("Test the fit of {obj}", "flush", "misaligned"),
        ("Check {obj} with a level", "level", "off level"),
        ("Hand-tighten and wiggle {obj}", "solid", "loose"),
    ),
))
