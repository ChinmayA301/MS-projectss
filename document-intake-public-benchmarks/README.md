# Document Intake Public Benchmarks

Public-data notebook and script for benchmarking document intake tasks against RVL-CDIP and FUNSD-style datasets. The notebook frames the results as external benchmarks only, not proprietary county or operational data.

## What It Covers

- RVL-CDIP document type classification with a small fine-tuned ResNet18 baseline.
- FUNSD form-understanding setup notes for layout-aware token classification.
- Exportable metrics in `results/` for report use.

## Structure

- `notebooks/document_intake_benchmark.ipynb` - original Colab notebook.
- `src/run_rvl_cdip_benchmark.py` - reusable, sample-limited RVL-CDIP training/evaluation script.
- `requirements.txt` - Python dependencies for the benchmark workflow.

## Run

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python src/run_rvl_cdip_benchmark.py --train-samples 500 --test-samples 100 --epochs 1
```

The script writes `results/document_benchmarks_public_rvlcdip.csv`.

## Notebook Result Context

The uploaded notebook ran a small RVL-CDIP subset benchmark and reported roughly `0.844` test accuracy for a ResNet18 baseline on the sampled setup. Treat that as a notebook-run artifact, not a production model claim.
