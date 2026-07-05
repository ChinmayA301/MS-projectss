from __future__ import annotations

import argparse
from pathlib import Path

import pandas as pd
import torch
import torch.nn as nn
from datasets import load_dataset
from sklearn.metrics import accuracy_score, classification_report
from torch.utils.data import DataLoader, Dataset
from torchvision import models, transforms
from tqdm import tqdm


class RVLCDIPDataset(Dataset):
    def __init__(self, split, transform, n_samples: int | None = None):
        self.data = split.select(range(min(n_samples, len(split)))) if n_samples else split
        self.transform = transform

    def __len__(self) -> int:
        return len(self.data)

    def __getitem__(self, idx: int):
        sample = self.data[idx]
        image = sample["image"].convert("RGB")
        return self.transform(image), int(sample["label"])


def train_epoch(model, loader, criterion, optimizer, device) -> float:
    model.train()
    total_loss = 0.0
    for images, labels in tqdm(loader, desc="train"):
        images, labels = images.to(device), labels.to(device)
        optimizer.zero_grad()
        loss = criterion(model(images), labels)
        loss.backward()
        optimizer.step()
        total_loss += float(loss.item())
    return total_loss / max(len(loader), 1)


@torch.no_grad()
def evaluate(model, loader, device):
    model.eval()
    y_true, y_pred = [], []
    for images, labels in tqdm(loader, desc="eval"):
        logits = model(images.to(device))
        y_true.extend(labels.numpy().tolist())
        y_pred.extend(torch.argmax(logits, dim=1).cpu().numpy().tolist())
    return accuracy_score(y_true, y_pred), y_true, y_pred


def main() -> None:
    parser = argparse.ArgumentParser(description="Run a sample-limited RVL-CDIP document classification benchmark.")
    parser.add_argument("--train-samples", type=int, default=500)
    parser.add_argument("--test-samples", type=int, default=100)
    parser.add_argument("--epochs", type=int, default=1)
    parser.add_argument("--batch-size", type=int, default=32)
    parser.add_argument("--output-dir", default="results")
    args = parser.parse_args()

    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    dataset = load_dataset("rvl_cdip")
    label_names = dataset["train"].features["label"].names

    transform = transforms.Compose([transforms.Resize((224, 224)), transforms.ToTensor()])
    train_ds = RVLCDIPDataset(dataset["train"], transform, args.train_samples)
    test_ds = RVLCDIPDataset(dataset["test"], transform, args.test_samples)
    train_loader = DataLoader(train_ds, batch_size=args.batch_size, shuffle=True)
    test_loader = DataLoader(test_ds, batch_size=args.batch_size)

    model = models.resnet18(weights=None)
    model.fc = nn.Linear(model.fc.in_features, len(label_names))
    model = model.to(device)

    criterion = nn.CrossEntropyLoss()
    optimizer = torch.optim.Adam(model.parameters(), lr=1e-4)
    for epoch in range(args.epochs):
        loss = train_epoch(model, train_loader, criterion, optimizer, device)
        print(f"epoch={epoch + 1} loss={loss:.4f}")

    accuracy, y_true, y_pred = evaluate(model, test_loader, device)
    print(f"accuracy={accuracy:.4f}")
    print(classification_report(y_true, y_pred, target_names=label_names))

    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    pd.DataFrame(
        {
            "dataset": ["RVL-CDIP"],
            "model_name": ["resnet18_sample_limited"],
            "task": ["doc_type_classification"],
            "metric_name": ["accuracy"],
            "metric_value": [accuracy],
            "train_samples": [len(train_ds)],
            "test_samples": [len(test_ds)],
        }
    ).to_csv(output_dir / "document_benchmarks_public_rvlcdip.csv", index=False)


if __name__ == "__main__":
    main()
