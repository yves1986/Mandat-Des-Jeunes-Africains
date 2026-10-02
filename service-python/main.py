"""FastAPI microservice for the Mandat des Jeunes Africains.

Provides data-analysis and reporting endpoints on top of the membership
and engagement data collected by the Node.js API (backend-node): member
statistics for internal dashboards, and on-demand CSV activity reports.
"""

from __future__ import annotations

import os

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel

from scripts.analyze_members import analyze_members, fetch_members
from scripts.generate_report import generate_report

app = FastAPI(
    title="Mandat des Jeunes Africains — Service d'analyse",
    description="Microservice Python pour l'analyse des membres et la génération de rapports.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("CORS_ORIGIN", "http://localhost:3000")],
    allow_methods=["*"],
    allow_headers=["*"],
)


class MemberRecord(BaseModel):
    country: str | None = None
    engagementType: str | None = None
    createdAt: str | None = None


class AnalyzeRequest(BaseModel):
    records: list[MemberRecord] = []


@app.get("/health")
def health() -> dict:
    return {"status": "ok", "service": "mandat-jeunes-africains-service-python"}


@app.post("/analyze/members")
def analyze_members_endpoint(payload: AnalyzeRequest) -> dict:
    records = [record.model_dump() for record in payload.records]
    return analyze_members(records)


@app.get("/analyze/members/live")
def analyze_members_live() -> dict:
    try:
        records = fetch_members()
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=502, detail=f"Impossible de joindre l'API backend: {exc}")

    return analyze_members(records)


@app.get("/reports/members")
def report_members() -> FileResponse:
    try:
        path = generate_report()
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=502, detail=f"Génération du rapport impossible: {exc}")

    return FileResponse(path, filename=os.path.basename(path), media_type="text/csv")
