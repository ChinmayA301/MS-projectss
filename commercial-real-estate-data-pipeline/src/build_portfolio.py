from __future__ import annotations

from pathlib import Path

import pandas as pd


PROJECT_ROOT = Path(__file__).resolve().parents[1]
RAW_DIR = PROJECT_ROOT / "data" / "raw"
PROCESSED_DIR = PROJECT_ROOT / "data" / "processed"


PORTFOLIO_DATA = {
    "Property Address": [
        "4207 Broadway, Oakland, CA",
        "186 21st St, Brooklyn, NY",
        "613 4th Ave, Brooklyn, NY",
        "22107 Vermont Avenue, Torrance, CA",
        "1000 Barone Ave, Atlanta, GA",
        "888 Hilgard Ave, Los Angeles, CA",
        "255 Mariposa Ave, Los Angeles, CA",
        "841 Fedora Street, Los Angeles, CA",
        "5959 Franklin Ave, Hollywood, CA",
        "24817 Walnut St, Santa Clarita, CA",
        "1830 N Cherokee Avenue, Los Angeles CA",
        "6420 West Franklin Ave, Los Angeles, CA 90028",
        "5300 South J St, Oxnard CA",
        "940 City Plaza Way, Oviedo, FL",
        "1818 N Cherokee Ave, Los Angeles CA",
        "316-318 E 81st St, New York, NY",
        "639 S. La Brea Ave, Los Angeles CA",
        "5251 Cane Island Loop, Kissimmee, FL",
        "1662 Celebration Ave, Celebration, FL",
        "2867 Sunset Place, Los Angeles, CA",
    ],
    "Acquisition Date": [
        "2017",
        "2015",
        "2015",
        "2022",
        "2021",
        "2013",
        "2015",
        "May-17",
        "Aug-14",
        "Feb-21",
        "2018",
        "2020",
        "Nov-21",
        "2021",
        "Dec-19",
        "2015",
        "2017",
        "Dec-17",
        "Feb-19",
        "2013",
    ],
    "Investment Type": [
        "Mixed-use Development",
        "-",
        "-",
        "Residential Development",
        "Residential Value-Add",
        "Residential Value-Add",
        "Mixed Use Development",
        "Residential Development",
        "Residential Value-Add",
        "Residential Value-Add",
        "Residential Value-Add",
        "Mixed-use Development",
        "Residential Value-Add",
        "Residential Value-Add",
        "Residential Development",
        "-",
        "Mixed-Use Development",
        "Residential Value-Add",
        "Residential Value-Add",
        "Equity and Debt",
    ],
    "Asset Type": [
        "Luxury Multi-family",
        "Luxury Residential & Retail Development",
        "Mixed-Use Residential & Retail Development",
        "Luxury Multi-family",
        "Multi-family",
        "Luxury multi-family and extended stay",
        "Luxury Multi-family",
        "Luxury multi-family",
        "Luxury multi-family and extended stay",
        "Mixed-use",
        "Luxury multi-family and extended stay",
        "Luxury Multi-family and Retail",
        "Multi-family",
        "Luxury Multi-family",
        "Luxury multi-family and extended-stay",
        "Luxury Condominium Building Development",
        "Luxury Multi-family and Hotel",
        "Multi-family",
        "Multi-family",
        "Luxury Apartment Building Development",
    ],
    "Size": [
        "143 Units, 3,000 SF of ground floor retail space",
        "30,000 SQF, 26 Units",
        "73 Residential Units & 3,455 SF Retail Space",
        "525 Units",
        "712 Units",
        "60 Units",
        "122 Units, 4,600 SF Retail",
        "200 Units",
        "55 Units",
        "144 Units",
        "75 Units",
        "222 residential units, 18,500 SF rooftop restaurant/lounge",
        "170 Units",
        "275 Units",
        "86 Units",
        "14,000 SF",
        "121 Residential units, 125-key hotel and 30,100 SF retail space",
        "166 Units",
        "306 Units",
        "60 Units",
    ],
}


def combine_property_extracts(raw_dir: Path = RAW_DIR) -> pd.DataFrame:
    csv_files = sorted(raw_dir.glob("cgiplus*.csv"))
    if not csv_files:
        raise FileNotFoundError(f"No cgiplus CSV files found in {raw_dir}")

    frames = [pd.read_csv(csv_file) for csv_file in csv_files]
    return pd.concat(frames, axis=0, ignore_index=True)


def build_portfolio_table() -> pd.DataFrame:
    return pd.DataFrame(PORTFOLIO_DATA)


def main() -> None:
    PROCESSED_DIR.mkdir(parents=True, exist_ok=True)

    combined = combine_property_extracts()
    combined.to_csv(PROCESSED_DIR / "combined_cgiplus.csv", index=False)

    portfolio = build_portfolio_table()
    portfolio.to_csv(PROCESSED_DIR / "portfolio_table.csv", index=False)

    print(f"Wrote {len(combined)} combined rows")
    print(f"Wrote {len(portfolio)} portfolio rows")


if __name__ == "__main__":
    main()
