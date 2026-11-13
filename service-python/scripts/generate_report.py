"""Generate a CSV activity report for the Mandat des Jeunes Africains.

Combines engagement sign-ups and published actions from the Node.js API
into a single dated CSV report, saved under `service-python/reports/`.
Used by the FastAPI microservice (`/reports/members`) and can also be run
directly as a script for ad-hoc exports.
"""

from __future__ import annotations

import os
import sys
from datetime import datetime, timezone

import pandas as pd
import requests

sys.path.append(os.path.dirname(__file__))
from analyze_members import analyze_members, fetch_members  # noqa: E402

BACKEND_API_URL = os.getenv("BACKEND_API_URL", "http://localhost:4000")
REPORTS_DIR = os.path.join(os.path.dirname(__file__), "..", "reports")


def fetch_actions() -> list[dict]:
    response = requests.get(f"{BACKEND_API_URL}/api/actions", timeout=10)
    response.raise_for_status()
    return response.json().get("data", [])


def generate_report(output_dir: str = REPORTS_DIR) -> str:
    os.makedirs(output_dir, exist_ok=True)

    members = fetch_members()
    actions = fetch_actions()
    analysis = analyze_members(members)

    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d_%H%M%S")
    output_path = os.path.join(output_dir, f"rapport_activite_{timestamp}.csv")

    summary_rows = [
        {"indicateur": "Total des membres engagés", "valeur": analysis["total_members"]},
        {"indicateur": "Total des actions publiées", "valeur": len(actions)},
    ]
    for country, count in analysis["by_country"].items():
        summary_rows.append({"indicateur": f"Membres — {country}", "valeur": count})
    for engagement_type, count in analysis["by_engagement_type"].items():
        summary_rows.append({"indicateur": f"Type — {engagement_type}", "valeur": count})

    pd.DataFrame(summary_rows).to_csv(output_path, index=False, encoding="utf-8-sig")
    return output_path


if __name__ == "__main__":
    path = generate_report()
    print(f"Rapport généré : {path}")
