def sortedSquaredArray(array):
    # Write your code here.
    result = []
    start = 0
    end = len(array) - 1

    for i in range(len(array)):
        smaller_value = abs(array[start])
        larger_value = abs(array[end])

        if abs(smaller_value) > abs(larger_value):
            result.append(smaller_value * smaller_value)
            start += 1
        else:
            result.append(larger_value * larger_value)
            end -= 1
    return [x for x in reversed(result)]


array = [-3, -2, -1]
print(sortedSquaredArray(array))
