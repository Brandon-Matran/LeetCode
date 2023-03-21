
def topKFrequent(nums, k):
    d = {}
    result = []
    for n in nums:
        if n not in d:
            d[n] = 1
        else:
            d[n] += 1
    print(d)
    sorted_d = sorted(d.items(), key=lambda x: x[1], reverse=True)
    for items in sorted_d[0:k]:
        result.append(items[0])
    return result




nums = [4,1,-1,2,-1,2,3]
k = 2
print(topKFrequent(nums, k))
