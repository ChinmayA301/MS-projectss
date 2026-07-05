# Social Media Growth Analytics

Notebook and reusable pipeline for studying how social sentiment and trend signals relate to business growth metrics such as sales and market share.

## What It Covers

- Tweet/text cleaning.
- Sentiment scoring by date.
- Merge with sales and market-share data.
- Correlation, linear regression, and optional ARIMA-style forecasting.
- Streamlit dashboard concept from the original notebook.

## Structure

- `notebooks/social_media_growth_project.ipynb` - original Colab notebook.
- `src/social_media_growth_pipeline.py` - offline CSV-based analysis pipeline.
- `requirements.txt` - Python dependencies.

## Inputs

The script expects:

- `--tweets`: CSV with `Date` and either `Tweet`, `Text`, or `Cleaned_Tweet`.
- `--sales`: CSV with `Date` and `Sales`.
- optional `--market`: CSV with `Date` and market-share fields.

## Run

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python src/social_media_growth_pipeline.py --tweets tweets.csv --sales sales.csv --market market_share.csv
```

The script writes `results/social_media_growth_analysis.csv`.

## Credential Handling

The original notebook sketched Tweepy collection with placeholder credentials. This packaged version does not hard-code credentials; use local CSV exports or environment-managed API credentials in a separate collection step.
