import streamlit as st
import pandas as pd

# Load trend data
df = pd.DataFrame({
    'Trend': ['#AI', '#Crypto', '#Marketing'],
    'Engagement': [50000, 70000, 45000]
})

st.title("TikTok Trend Monitoring")

# Display trending hashtags
st.dataframe(df)

# Plot engagement levels
import matplotlib.pyplot as plt
plt.figure(figsize=(6, 3))
plt.bar(df['Trend'], df['Engagement'], color=['blue', 'green', 'red'])
st.pyplot(plt)
