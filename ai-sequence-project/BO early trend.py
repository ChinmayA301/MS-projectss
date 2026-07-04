from skopt import gp_minimize
from skopt.space import Real
from skopt.utils import use_named_args

# Define the search space (weights for engagement metrics)
space = [
    Real(0, 1, name='likes_weight'),
    Real(0, 1, name='comments_weight'),
    Real(0, 1, name='shares_weight'),
]

# Objective function (optimize trend score)
@use_named_args(space)
def trend_score(likes_weight, comments_weight, shares_weight):
    score = (
        likes_weight * avg_likes +
        comments_weight * avg_comments +
        shares_weight * avg_shares
    )
    return -score  # Minimize the negative score

# Define search space
space = [
    Categorical(['text', 'image', 'video'], name='content_type'),
    Real(0, 24, name='posting_time'),
    Categorical(['micro', 'macro'], name='influencer_type'),
    Categorical(['low-density', 'high-density'], name='hashtag_strategy')
]

# Define black-box objective function
@use_named_args(space)
def objective(content_type, posting_time, influencer_type, hashtag_strategy):
    return simulate_virality(content_type, posting_time, influencer_type, hashtag_strategy)

# Optimize
res = gp_minimize(trend_score, space, n_calls=30)
print("Optimal weights:", res.x)
