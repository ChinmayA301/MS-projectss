from skopt import gp_minimize
from skopt.space import Real, Categorical
from skopt.utils import use_named_args

# Search space: Ad parameters
space = [
    Real(100, 5000, name='budget'),  # Budget in $
    Real(0, 24, name='posting_time'),  # Posting time
    Categorical(['video', 'image', 'text'], name='ad_type')
]

# Simulated objective function (e.g., maximize CTR)
@use_named_args(space)
def objective(budget, posting_time, ad_type):
    return simulate_ad_performance(budget, posting_time, ad_type)

# Optimize
res = gp_minimize(objective, space, n_calls=30)
print("Best parameters:", res.x)
