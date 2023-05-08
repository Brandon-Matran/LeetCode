# def findThreeLargestNumbers(array):
#     largest = 0
#     second = 0
#     third =0
#     for n in array:
#         if n > largest:
#             third = second
#             second = largest
#             largest = n
#         elif n > second:
#             third = second
#             second = n
#         elif n > third:
#             third = n


#     return third


def findThreeLargestNumbers(array):
    largest = float('-inf')
    second = float('-inf')
    third = float('-inf')
    for n in array:
        if n > largest:
            third = second
            second = largest
            largest = n
        elif n > second:
            third = second
            second = n
        elif n > third:
            third = n
    return third

# array = [10,5,9,10,12]
array = [-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7]
# array = [55, 7, 8]
print(findThreeLargestNumbers(array))
