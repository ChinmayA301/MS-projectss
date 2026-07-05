from __future__ import annotations

import argparse
from pathlib import Path

import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import normalize


def build_grid_segments(
    input_csv: Path,
    output_dir: Path,
    clusters: int,
    x_bins: int,
    y_bins: int,
    category_col: str,
) -> None:
    df = pd.read_csv(input_csv)
    required = {"XCOORD", "YCOORD", "CASEID", category_col}
    missing = required - set(df.columns)
    if missing:
        raise ValueError(f"Missing required columns: {sorted(missing)}")

    df_geo = df.dropna(subset=["XCOORD", "YCOORD", category_col]).copy()
    df_geo["X_bin"] = pd.qcut(df_geo["XCOORD"], q=x_bins, duplicates="drop")
    df_geo["Y_bin"] = pd.qcut(df_geo["YCOORD"], q=y_bins, duplicates="drop")
    df_geo["GRID_ID"] = df_geo["X_bin"].astype(str) + "_" + df_geo["Y_bin"].astype(str)

    pivot = pd.pivot_table(
        df_geo,
        index="GRID_ID",
        columns=category_col,
        values="CASEID",
        aggfunc="count",
        fill_value=0,
    )

    features = normalize(pivot.values, norm="l1", axis=1)
    labels = KMeans(n_clusters=clusters, random_state=42, n_init="auto").fit_predict(features)
    segments = pivot.copy()
    segments["cluster_id"] = labels
    segments["total_cases"] = pivot.sum(axis=1)

    output_dir.mkdir(parents=True, exist_ok=True)
    segments.reset_index().rename(columns={"GRID_ID": "grid_id"}).to_csv(
        output_dir / "mpls311_segments_by_grid_reason.csv", index=False
    )

    profile_rows = []
    for cluster_id in sorted(segments["cluster_id"].unique()):
        subset = segments[segments["cluster_id"] == cluster_id].drop(columns=["cluster_id", "total_cases"])
        for rank, (reason, score) in enumerate(subset.mean(axis=0).sort_values(ascending=False).head(10).items(), 1):
            profile_rows.append({"cluster_id": cluster_id, "rank": rank, category_col: reason, "mean_count": score})

    pd.DataFrame(profile_rows).to_csv(output_dir / "mpls311_cluster_profiles.csv", index=False)
    print(f"Wrote {len(segments)} grid segments across {clusters} clusters")


def main() -> None:
    parser = argparse.ArgumentParser(description="Cluster public 311 service requests into spatial demand segments.")
    parser.add_argument("--input", required=True, type=Path)
    parser.add_argument("--output-dir", default=Path("results"), type=Path)
    parser.add_argument("--clusters", default=3, type=int)
    parser.add_argument("--x-bins", default=30, type=int)
    parser.add_argument("--y-bins", default=30, type=int)
    parser.add_argument("--category-col", default="REASONNAME")
    args = parser.parse_args()

    build_grid_segments(args.input, args.output_dir, args.clusters, args.x_bins, args.y_bins, args.category_col)


if __name__ == "__main__":
    main()
