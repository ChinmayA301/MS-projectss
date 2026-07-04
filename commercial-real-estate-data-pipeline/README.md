# Commercial Real Estate Data Pipeline

Small Pandas pipeline converted from the original `Combining_csvs.ipynb` notebook. The project consolidates `cgiplus*.csv` property extracts and builds a structured portfolio table for downstream analysis.

## Structure

- `notebooks/Combining_csvs.ipynb` - original notebook.
- `src/build_portfolio.py` - reusable script version of the notebook logic.
- `data/raw/` - source `cgiplus` CSV extracts.
- `data/processed/` - generated combined outputs.

## Run

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python src/build_portfolio.py
```

The script writes:

- `data/processed/combined_cgiplus.csv`
- `data/processed/portfolio_table.csv`
