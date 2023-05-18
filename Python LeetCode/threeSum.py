def threeNumberSum(array, targetSum):
    array.sort()
    res = []

    for i in range(len(array)-1):
        p = array[i]
        l = i + 1
        r = len(array)-1
        while l < r:
            sum = p + array[l] + array[r]
            if sum == targetSum:
                res.append([p, array[l], array[r]])
                l += 1
                r -= 1
            elif sum > targetSum:
                r -= 1
            elif sum < targetSum:
                l += 1
    return res

array = [12, 3, 1, 2, -6, 5, -8, 6]
print(threeNumberSum(array, 0))
