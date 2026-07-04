import networkx as nx

G = nx.barabasi_albert_graph(1000, 5)  # Simulated TikTok user network

# Assign initial trend seeders
for node in range(10):
    G.nodes[node]['trend_score'] = 1.0

# Simulate trend spread
for _ in range(10):  # 10 time steps
    for node in G.nodes:
        neighbors = list(G.neighbors(node))
        if neighbors:
            G.nodes[node]['trend_score'] = sum(G.nodes[n]['trend_score'] for n in neighbors) / len(neighbors)

# Visualize spread
import matplotlib.pyplot as plt
nx.draw(G, node_color=[G.nodes[n]['trend_score'] for n in G.nodes], cmap="coolwarm")
plt.show()
