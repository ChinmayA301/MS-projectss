# Civic Service Segmentation

Notebook and script for building behavioral segments from public Minneapolis 311 request data. The workflow aggregates case types by spatial grid cell, clusters normalized request distributions, and exports segment profiles.

## What It Covers

- Spatial grid construction from `XCOORD` and `YCOORD`.
- Request-reason distribution features by grid cell.
- K-means clustering into service-demand segments.
- Cluster profile exports for interpretation.

## Structure

- `notebooks/segmentation_clusters.ipynb` - original analysis notebook.
- `src/segment_311_requests.py` - reusable CLI pipeline.
- `requirements.txt` - Python dependencies.

## Run

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python src/segment_311_requests.py --input Public_311_2024.csv --clusters 3
```

The script writes:

- `results/mpls311_segments_by_grid_reason.csv`
- `results/mpls311_cluster_profiles.csv`

## Notebook Result Context

The notebook found a statistically significant association between clusters and neighborhoods, including a reported Cramer's V around `0.53` in the run output. Treat this as an exploratory public-data segmentation artifact.
