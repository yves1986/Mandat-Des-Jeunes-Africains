"""Analyze membership/engagement data for the Mandat des Jeunes Africains.

Turns a list of engagement records (as produced by the Node.js API's
`/api/engagement` endpoint) into aggregate statistics used for internal
dashboards and reports: distribution by country, by engagement type, and
monthly growth of new sign-ups.
"""

from __future__ import annotations

import json
import os
import sys
from typing import Any

import pandas as pd
import requests

BACKEND_API_URL = os.getenv("BACKEND_API_URL", "http://localhost:4000")


def analyze_members(records: list[dict[str, Any]]) -> dict[str, Any]:
    if not records:
        return {
            "total_members": 0,
            "by_country": {},
            "by_engagement_type": {},
            "monthly_growth": {},
        }

    df = pd.DataFrame(records)

    by_country = (
        df["country"].value_counts().sort_values(ascending=False).to_dict()
        if "country" in df.columns
        else {}
    )

    by_engagement_type = (
        df["engagementType"].value_counts().to_dict()
        if "engagementType" in df.columns
        else {}
    )

    monthly_growth: dict[str, int] = {}
    if "createdAt" in df.columns:
        dates = pd.to_datetime(df["createdAt"], errors="coerce")
        monthly_growth = dates.dt.to_period("M").astype(str).value_counts().sort_index().to_dict()

    return {
        "total_members": int(len(df)),
        "by_country": by_country,
        "by_engagement_type": by_engagement_type,
        "monthly_growth": monthly_growth,
    }


def fetch_members() -> list[dict[str, Any]]:
    response = requests.get(f"{BACKEND_API_URL}/api/engagement", timeout=10)
    response.raise_for_status()
    return response.json().get("data", [])


def main() -> None:
    records = fetch_members()
    result = analyze_members(records)
    json.dump(result, sys.stdout, ensure_ascii=False, indent=2, default=str)
    sys.stdout.write("\n")


if __name__ == "__main__":
    main()
