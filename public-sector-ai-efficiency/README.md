# Public-Sector AI Readiness and Efficiency Evaluation

A responsible-AI decision framework for evaluating county digital-service use cases before procurement, sensitive-data access, or operational deployment.

The work combines data science, AI engineering, workflow analysis, resident-segment research, and governance. Its purpose is not to argue that every workflow needs AI; it is to help leadership decide what is worth testing, what controls a pilot requires, and what should be redesigned or rejected.

## Problem

Public agencies need to assess operational value without treating privacy, equity, accessibility, and human review as afterthoughts. Early feasibility work also cannot assume access to resident or confidential operational data.

## What I Designed

A four-stage evaluation lifecycle:

1. **Assessment and baseline mapping** — document workflows, bottlenecks, existing KPIs, readiness, resident barriers, and rights-impacting decisions.
2. **Proxy simulation and modeling** — use public, synthetic, or analogous data to test technical feasibility, error patterns, time savings, and subgroup performance.
3. **Controlled pilot evaluation** — preserve human review and compare staff performance, overrides, latency, trust, and adoption in an approved sandbox.
4. **Governance and scale decision** — complete impact assessment, assign risk owners, define monitoring, and decide whether to scale, limit, redesign, or reject the use case.

## Priority Use Cases

| Use case | Technical evaluation | Operational question |
|---|---|---|
| Document intake | OCR, classification, extraction, confidence calibration, manual-review rate | Can routine routing improve without increasing false routing or accessibility gaps? |
| Policy assistant | Retrieval precision/recall, citation correctness, faithfulness, refusal behavior | Can staff find approved guidance faster while preserving evidence and escalation? |
| Service-request triage | Text classification, delay prediction, queue simulation, subgroup error analysis | Can requests reach the right team faster without hiding urgent or non-English cases? |

## Existing Public Evidence

- [`../document-intake-public-benchmarks/`](../document-intake-public-benchmarks/) contains a public RVL-CDIP document-classification benchmark and FUNSD-style form-understanding notes. Its notebook result is an external sample benchmark, not county performance.
- [`../civic-service-segmentation/`](../civic-service-segmentation/) clusters public Minneapolis 311 demand patterns by spatial grid and request mix as an exploratory civic-analytics artifact.
- [Aegis AI Readiness Pulse Survey](https://github.com/ChinmayA301/aegis-survey) demonstrates a privacy-conscious intake layer for readiness, governance, ROI, and implementation signals.
- [Related public-sector AI writing](https://app.chinmayarora.com/blog/the-impact-of-ai-on-local-government-digital-experience/) explains the governance and operating-model context.

## Responsible AI Controls

- Rights-impact classification before modeling.
- Human review for consequential or low-confidence outputs.
- Data minimization, access control, logging, and retention boundaries.
- Performance checks by language, accessibility need, and resident segment where appropriate.
- Model cards, dataset documentation, risk registers, override logs, monitoring plans, and shutdown criteria.
- Explicit uncertainty and transfer limitations for every proxy result.

## Result and Limits

The project produced a decision-ready structure for ranking use cases, defining measurable pilot criteria, and translating technical experiments into governance and operating decisions. Simulation outputs are hypotheses for pilot design—not validated claims about county savings, production accuracy, or resident outcomes.

No resident-level, confidential county, or restricted operational data is included here. Public examples use open or synthetic proxies and deliberately separate analytical recommendation from operational action.

## Stack

Python, pandas, scikit-learn, SHAP, public 311 data, RVL-CDIP/FUNSD-style document benchmarks, Power BI concepts, workflow simulation, fairness analysis, and responsible-AI documentation.
