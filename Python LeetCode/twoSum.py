def twoNumberSum(array, targetSum):
    # Write your code here.

    d = {}
    for i in range(len(array)):
        needed_value = targetSum - array[i]
        if needed_value in d:
            return [needed_value, array[i]]
        else:
            d[array[i]] = i
            print(d)


array = [14]
targetSum = 16
print(twoNumberSum(array, targetSum))
