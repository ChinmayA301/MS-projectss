import networkx as nx

G = nx.DiGraph()

# Add nodes (users)
users = range(1000)
for user in users:
    G.add_node(user, engagement_score=np.random.rand())

# Add edges (connections)
for _ in range(5000):
    G.add_edge(np.random.choice(users), np.random.choice(users), weight=np.random.rand())
