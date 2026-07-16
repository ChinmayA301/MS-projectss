# Longitudinal Diabetes Risk Modeling with Neighborhood Deprivation

A longitudinal healthcare data science study testing whether the Area Deprivation Index (ADI) adds predictive value for future uncontrolled HbA1c beyond available clinical and demographic features.

This is best read as a cohort-design and model-evaluation project, not as a high-accuracy diabetes predictor. The strongest finding was a controlled negative result: ADI did not consistently improve patient-level discrimination, while incomplete and irregular follow-up materially constrained what the models could learn.

## What I Built

- Reduced repeated encounter-level records to patient-level longitudinal trajectories.
- Constructed index events and 6-, 12-, and 24-month outcomes using a clinically defined `±90 day` matching window.
- Audited outcome availability and distance from each target follow-up date instead of silently dropping unmatched patients.
- Compared logistic regression, random forest, and XGBoost under matched `ADI` and `NoADI` feature specifications.
- Evaluated ROC AUC, precision-recall AUC, Brier score, calibration, SHAP feature effects, and coverage by ADI quintile.

## Key Results

| Horizon | Patients with outcome | Coverage | Best model | Best ROC AUC |
|---|---:|---:|---|---:|
| 6 months | 11,365 | 56.8% | XGBoost without ADI | 0.612 |
| 12 months | 10,281 | 51.4% | Logistic regression without ADI | 0.607 |
| 24 months | 8,155 | 40.8% | Logistic regression without ADI | 0.611 |

The largest positive ADI change was approximately `+0.008` AUC for the 6-month random forest. Most matched comparisons were neutral or negative.

Among retained outcomes, the median absolute distance from the target follow-up date was 33–35 days. All retained observations fell within 90 days, but declining coverage means longer-horizon cohorts may be selected by continued healthcare utilization rather than missing at random.

## Interpretation

ADI can remain important for population health, equity analysis, and resource allocation without adding much incremental information to an individual prediction model. The observed discrimination was weak and is not suitable for clinical deployment.

Possible explanations include neighborhood-level measurement limits, signal already represented by clinical covariates, unobserved treatment and access factors, irregular measurement timing, and selection bias from who returns for follow-up testing.

## Public Artifacts

- `capstonefullanalysis.ipynb` — full analysis workflow.
- `sampling.ipynb` — supporting sampling work.
- `environment_GeoSDOH.yml` — environment specification.
- `outputs/model_metrics_ADI_vs_NoADI.csv` — aggregate model comparison.
- `outputs/coverage_report.csv` — observed outcomes by horizon.
- `outputs/window_quality_report.csv` — follow-up matching quality.
- `outputs/` — aggregate ROC, calibration, SHAP, coverage, and persistence figures.

## Privacy and Reproducibility

The source EHR data is not public. This repository shares aggregate metrics, figures, environment information, and analytical code only. It does not include patient-level data, identifiers, re-identifiable dates, restricted institution details, or small-cell subgroup outputs.

## Stack

Python, pandas, NumPy, scikit-learn, XGBoost, SHAP, Matplotlib, Jupyter, longitudinal cohort design, calibration analysis, and controlled feature ablation.
