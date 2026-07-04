import requests

api_key = "your_tikapi_key"
url = "https://api.tikapi.io/trending?region=US"

headers = {"Authorization": f"Bearer {api_key}"}
response = requests.get(url, headers=headers)

if response.status_code == 200:
    data = response.json()
    for video in data["videos"]:
        print(f"Trend: {video['desc']} - Likes: {video['stats']['diggCount']}")
else:
    print("Error:", response.json())
