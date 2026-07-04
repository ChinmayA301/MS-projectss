import numpy as np

class MultiArmedBandit:
    def __init__(self, arms):
        self.arms = arms
        self.q_values = np.zeros(arms)
        self.counts = np.zeros(arms)

    def select_arm(self, epsilon=0.1):
        if np.random.rand() < epsilon:
            return np.random.randint(self.arms)  # Explore
        return np.argmax(self.q_values)  # Exploit

    def update(self, arm, reward):
        self.counts[arm] += 1
        self.q_values[arm] += (reward - self.q_values[arm]) / self.counts[arm]

# Simulate ad performance
bandit = MultiArmedBandit(3)  # 3 ad types
for _ in range(1000):
    arm = bandit.select_arm()
    reward = np.random.randn() + (arm * 0.1)  # Simulated CTR
    bandit.update(arm, reward)

print("Best Ad Type:", np.argmax(bandit.q_values))
