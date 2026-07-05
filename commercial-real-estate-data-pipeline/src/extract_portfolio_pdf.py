from __future__ import annotations

import argparse
import re
from pathlib import Path

import pandas as pd
from PyPDF2 import PdfReader


STATE_NAMES = {
    "ALABAMA", "ALASKA", "ARIZONA", "ARKANSAS", "CALIFORNIA", "COLORADO", "CONNECTICUT",
    "DELAWARE", "FLORIDA", "GEORGIA", "HAWAII", "IDAHO", "ILLINOIS", "INDIANA", "IOWA",
    "KANSAS", "KENTUCKY", "LOUISIANA", "MAINE", "MARYLAND", "MASSACHUSETTS", "MICHIGAN",
    "MINNESOTA", "MISSISSIPPI", "MISSOURI", "MONTANA", "NEBRASKA", "NEVADA",
    "NEW HAMPSHIRE", "NEW JERSEY", "NEW MEXICO", "NEW YORK", "NORTH CAROLINA",
    "NORTH DAKOTA", "OHIO", "OKLAHOMA", "OREGON", "PENNSYLVANIA", "RHODE ISLAND",
    "SOUTH CAROLINA", "SOUTH DAKOTA", "TENNESSEE", "TEXAS", "UTAH", "VERMONT",
    "VIRGINIA", "WASHINGTON", "WEST VIRGINIA", "WISCONSIN", "WYOMING",
}


def extract_text(pdf_path: Path) -> str:
    reader = PdfReader(str(pdf_path))
    return "\n".join(page.extract_text() or "" for page in reader.pages)


def parse_portfolio_text(text: str) -> pd.DataFrame:
    rows = []
    current_state = None
    for raw_line in text.splitlines():
        line = raw_line.strip()
        if not line:
            continue
        upper = line.upper()
        if upper in STATE_NAMES:
            current_state = upper.title()
            continue
        if current_state and re.search(r"\d", line):
            rows.append({"state": current_state, "property_line": line})
    return pd.DataFrame(rows)


def main() -> None:
    parser = argparse.ArgumentParser(description="Extract rough property rows from a real-estate portfolio PDF.")
    parser.add_argument("--pdf", required=True, type=Path)
    parser.add_argument("--output", default=Path("data/processed/pdf_property_details.csv"), type=Path)
    args = parser.parse_args()

    df = parse_portfolio_text(extract_text(args.pdf))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    df.to_csv(args.output, index=False)
    print(f"Wrote {len(df)} parsed rows to {args.output}")


if __name__ == "__main__":
    main()
