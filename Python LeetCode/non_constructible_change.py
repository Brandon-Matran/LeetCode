# def nonConstructibleChange(coins):
#     # Write your code here.
#     coins.sort()
#     currentChange = 0
#     for coin in coins:
#         if coin > currentChange + 1:
#             return currentChange + 1
#         currentChange += coin


#     return currentChange + 1


import itertools

# def nonConstructibleChange(coins):
#     # Generate all possible sums using the coins
#     sums = set([0])
#     for coin in coins:
#         new_sums = set([0])
#         for s in sums:
#             new_sums.add(s + coin)
#         sums |= new_sums

#     # Find the smallest amount of change that cannot be created
#     for i in itertools.count(1):
#         if i not in sums:
#             return i

def nonConstructibleChange(coins):
    result = set([0])
    for coin in coins:
        new_sums = set()
        for sum in result:
            new_sum = sum + coin
            new_sums.add(new_sum)
        result |= new_sums

    for i in range(1, max(result) + 2):
        if i not in result:
            return i



coins = [1,2,3,7]
print(nonConstructibleChange(coins))
