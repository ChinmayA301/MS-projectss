import numpy as np

# Initialize Q-table
Q = np.zeros((state_space_size, action_space_size))

# Hyperparameters
alpha = 0.1  # Learning rate
gamma = 0.9  # Discount factor
epsilon = 0.2  # Exploration rate

for episode in range(1000):
    state = env.reset()
    
    for t in range(100):  
        # Choose action using epsilon-greedy
        if np.random.rand() < epsilon:
            action = np.random.choice(action_space_size)  # Explore
        else:
            action = np.argmax(Q[state])  # Exploit
        
        # Take action, observe reward & new state
        next_state, reward, done = env.step(action)
        
        # Q-learning update rule
        Q[state, action] = (1 - alpha) * Q[state, action] + alpha * (reward + gamma * np.max(Q[next_state]))
        
        if done:
            break
        state = next_state
