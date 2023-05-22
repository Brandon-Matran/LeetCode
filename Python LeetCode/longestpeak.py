# def arrayOfProducts(array):
#     array_length = len(array)
#     output = [0] * array_length
#     l = 0
#     r = 0
#     product = 1
#     while l <= len(array)-1:
#         if l == r:
#             r += 1
#         while r < len(array) and r != l:
#             product *= array[r]
#             r += 1
#             if l == r:
#                 r += 1
#         output.insert(l, product)

#         l += 1
#         r = 0
#         product = 1

#     return output[:array_length]
def arrayOfProducts(array):
    array_length = len(array)
    output = [1] * array_length
    left_output = [1] * array_length
    right_output = [1] * array_length

    leftRunningProduct = 1
    for i in range(len(array)):
        left_output[i] = leftRunningProduct
        leftRunningProduct *= array[i]
    print(left_output)

    rightRunningProduct = 1
    for i in reversed(range(len(array))):
        right_output[i] = rightRunningProduct
        rightRunningProduct *= array[i]
    print(right_output)

array = [5, 1, 4, 2]
print(arrayOfProducts(array))
