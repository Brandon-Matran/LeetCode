# def tide_difference(measurements):

#     peak = max(measurements)
#     low = min(measurements)
#     diff = peak - low
#     l = measurements.index(low)
#     r = measurements.index(peak)

#     if l > r:
#         return None


#     for i in range(l, r):
#         if measurements[i] < measurements[i+1]:
#             continue
#         else:
#             return None
#     return diff











# measurements = [7, 6, 5, 4, 3, 2, 1]

# print(tide_difference(measurements))


string = "HELLO"

print(string[::-1])
