from __future__ import annotations

import argparse
import csv
from pathlib import Path
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup


def discover_property_links(index_url: str) -> list[str]:
    response = requests.get(index_url, timeout=30)
    response.raise_for_status()
    soup = BeautifulSoup(response.content, "html.parser")
    links = []
    for tag in soup.find_all("a", href=True):
        href = tag["href"]
        if "/properties/" in href:
            links.append(urljoin(index_url, href))
    return sorted(set(links))


def extract_property_details(url: str) -> dict[str, str]:
    response = requests.get(url, timeout=30)
    response.raise_for_status()
    soup = BeautifulSoup(response.content, "html.parser")
    details: dict[str, str] = {"source_url": url}

    title = soup.find(["h1", "h2"])
    if title:
        details["property_name"] = title.get_text(" ", strip=True)

    for row in soup.select(".listing_detail, table tr"):
        label = row.find("strong") or row.find("th")
        value = row.find("td")
        if label:
            key = label.get_text(" ", strip=True).strip(":")
            text = value.get_text(" ", strip=True) if value else row.get_text(" ", strip=True).replace(label.get_text(" ", strip=True), "")
            if key and text:
                details[key] = text.strip()

    return details


def write_rows(rows: list[dict[str, str]], output_csv: Path) -> None:
    output_csv.parent.mkdir(parents=True, exist_ok=True)
    fieldnames = sorted({key for row in rows for key in row})
    with output_csv.open("w", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def main() -> None:
    parser = argparse.ArgumentParser(description="Scrape commercial property detail pages into a CSV.")
    parser.add_argument("--index-url", help="Listing page to crawl for /properties/ links")
    parser.add_argument("--url", action="append", default=[], help="Specific property URL; can be passed multiple times")
    parser.add_argument("--output", default="data/processed/property_details.csv", type=Path)
    args = parser.parse_args()

    urls = list(args.url)
    if args.index_url:
        urls.extend(discover_property_links(args.index_url))
    if not urls:
        raise ValueError("Pass --index-url or at least one --url")

    rows = [extract_property_details(url) for url in sorted(set(urls))]
    write_rows(rows, args.output)
    print(f"Wrote {len(rows)} properties to {args.output}")


if __name__ == "__main__":
    main()
