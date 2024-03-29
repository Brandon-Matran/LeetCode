def binarySearch(array, target):
    left = 0
    right = len(array) - 1

    # middle = len(array) // 2
    # print(middle)
    while left <= right:
        middle = (left + right) // 2
        if array[middle] == target:
            return middle
        elif target < array[middle]:
            right = middle - 1
        else:
            left = middle + 1
    return middle


array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]

target = 33

print(binarySearch(array, target))
