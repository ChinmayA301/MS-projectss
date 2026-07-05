# Commercial Real Estate Data Pipeline

Small data pipeline converted from commercial real-estate notebooks. The project consolidates `cgiplus*.csv` property extracts, builds a structured portfolio table, and preserves additional scraping/PDF extraction notebooks as reusable scripts.

## Structure

- `notebooks/Combining_csvs.ipynb` - original CSV-combining notebook.
- `notebooks/property_page_scraping.ipynb` - original Colab page-scraping notebook.
- `notebooks/property_pdf_extraction.ipynb` - original Colab PDF extraction notebook.
- `src/build_portfolio.py` - reusable script version of the CSV/table notebook logic.
- `src/scrape_property_pages.py` - CLI scraper for commercial property pages.
- `src/extract_portfolio_pdf.py` - CLI parser for extracting rough property rows from portfolio PDFs.
- `data/raw/` - source `cgiplus` CSV extracts.
- `data/processed/` - generated combined outputs.

## Run

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python src/build_portfolio.py
```

Optional scraping/PDF extraction:

```bash
python src/scrape_property_pages.py --url "https://example.com/properties/sample/" --output data/processed/property_details.csv
python src/extract_portfolio_pdf.py --pdf KaminRealty_Portfolio_2024.pdf --output data/processed/pdf_property_details.csv
```

The script writes:

- `data/processed/combined_cgiplus.csv`
- `data/processed/portfolio_table.csv`
