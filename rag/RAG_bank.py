# pip install torch transformers chromadb openai pandas openpyxl

import pandas as pd
import chromadb
from transformers import AutoTokenizer, AutoModel
import torch
from openai import OpenAI

# Load the dataset
file_path = "C:/Users/chinmay/Desktop/chinmay/umn/spring 25/prof jaideep/Bank_test.csv"
df = pd.read_csv(file_path)

# Initialize ChromaDB
chroma_client = chromadb.PersistentClient(path="./chroma_bank_db")
collection = chroma_client.get_or_create_collection(name="bank_intents")

# Load Hugging Face model for embedding
tokenizer = AutoTokenizer.from_pretrained("sentence-transformers/all-MiniLM-L6-v2")
model = AutoModel.from_pretrained("sentence-transformers/all-MiniLM-L6-v2")

def get_embedding(text):
    """Generate embeddings using a Hugging Face sentence transformer"""
    tokens = tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    with torch.no_grad():
        embeddings = model(**tokens).last_hidden_state.mean(dim=1).squeeze().tolist()
    return embeddings

# Store dataset in ChromaDB
for i, row in df.iterrows():
    text = row["text"]
    category = row["category"]
    embedding = get_embedding(text)
    collection.add(
        documents=[text],
        metadatas=[{"intent": category}],
        ids=[str(i)]
    )

# Initialize OpenAI client. Set OPENAI_API_KEY in your shell before running.
client = OpenAI()

def generate_response(query):
    """Retrieve relevant intent and generate structured output"""
    query_embedding = get_embedding(query)
    results = collection.query(query_embeddings=[query_embedding], n_results=3)
    
    retrieved_texts = [r for r in results["documents"][0]]
    retrieved_intents = [r["intent"] for r in results["metadatas"][0]]

    # One-shot or Few-shot prompting
    prompt = f"""
    Given the bank-related text: "{query}", classify the intent and provide a reasoning.
    Retrieved examples: {retrieved_texts}
    
    Format:
    <intent: label>
    <reason: >
    """
    
    response = client.completions.create(
        model="gpt-4",  # Change to "meta-llama/Llama-3-8B" if using LLaMA 3
        messages=[{"role": "system", "content": "You are an expert in banking NLP tasks."},
                  {"role": "user", "content": prompt}],
        max_tokens=100
    )
    
    output = response.choices[0].message["content"]
    
    # Extract intent and reason
    intent = output.split("<intent:")[1].split(">")[0].strip() if "<intent:" in output else "Unknown"
    reason = output.split("<reason:")[1].split(">")[0].strip() if "<reason:" in output else "No explanation"
    
    return intent, reason

# Apply model to dataset
df[["intent", "reason"]] = df["text"].apply(lambda x: pd.Series(generate_response(x)))

# Save as Excel
output_file = "C:/Users/chinmay/Desktop/chinmay/umn/spring 25/prof jaideep/bank_output.xlsx"
df.to_excel(output_file, index=False)
print(f"Output saved to {output_file}")
