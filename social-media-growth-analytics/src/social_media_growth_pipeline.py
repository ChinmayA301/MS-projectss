from __future__ import annotations

import argparse
import re
from pathlib import Path

import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from sklearn.model_selection import train_test_split
from textblob import TextBlob


def clean_text(text: str) -> str:
    text = re.sub(r"http\S+", "", str(text))
    text = re.sub(r"@\w+", "", text)
    text = re.sub(r"#(\w+)", r"\1", text)
    text = re.sub(r"\W+", " ", text)
    return text.lower().strip()


def polarity(text: str) -> float:
    return float(TextBlob(text).sentiment.polarity)


def load_tweets(path: Path) -> pd.DataFrame:
    tweets = pd.read_csv(path)
    text_col = next((col for col in ["Cleaned_Tweet", "Tweet", "Text", "text"] if col in tweets.columns), None)
    if text_col is None or "Date" not in tweets.columns:
        raise ValueError("Tweets CSV must include Date and one of Cleaned_Tweet, Tweet, Text, or text")
    tweets["Date"] = pd.to_datetime(tweets["Date"]).dt.date
    tweets["cleaned_text"] = tweets[text_col].map(clean_text)
    tweets["sentiment"] = tweets["cleaned_text"].map(polarity)
    return tweets.groupby("Date", as_index=False)["sentiment"].mean()


def run_analysis(tweets_csv: Path, sales_csv: Path, market_csv: Path | None, output_dir: Path) -> None:
    sentiment = load_tweets(tweets_csv)
    sales = pd.read_csv(sales_csv)
    sales["Date"] = pd.to_datetime(sales["Date"]).dt.date
    business = sales

    if market_csv:
        market = pd.read_csv(market_csv)
        market["Date"] = pd.to_datetime(market["Date"]).dt.date
        business = business.merge(market, on="Date", how="left")

    analysis = sentiment.merge(business, on="Date", how="inner")
    if "Sales" not in analysis.columns:
        raise ValueError("Sales CSV must include a Sales column")

    correlation = analysis[["sentiment", "Sales"]].corr().iloc[0, 1]
    model_metrics = {"correlation_sentiment_sales": correlation}

    if len(analysis) >= 5:
        x = analysis[["sentiment"]]
        y = analysis["Sales"]
        x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)
        model = LinearRegression().fit(x_train, y_train)
        predictions = model.predict(x_test)
        model_metrics["linear_regression_mse"] = mean_squared_error(y_test, predictions)
        model_metrics["linear_regression_coef"] = float(model.coef_[0])

    output_dir.mkdir(parents=True, exist_ok=True)
    analysis.to_csv(output_dir / "social_media_growth_analysis.csv", index=False)
    pd.DataFrame([model_metrics]).to_csv(output_dir / "social_media_growth_metrics.csv", index=False)
    print(model_metrics)


def main() -> None:
    parser = argparse.ArgumentParser(description="Relate social sentiment trends to business growth metrics.")
    parser.add_argument("--tweets", required=True, type=Path)
    parser.add_argument("--sales", required=True, type=Path)
    parser.add_argument("--market", type=Path)
    parser.add_argument("--output-dir", default=Path("results"), type=Path)
    args = parser.parse_args()
    run_analysis(args.tweets, args.sales, args.market, args.output_dir)


if __name__ == "__main__":
    main()
