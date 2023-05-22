# def bestSeat(seats):
#     currentSeat = 0
#     bestSeatFound = False
#     for i in range(len(seats)-1):
#         if seats[i-1] == 0 and seats[i] == 0 and seats[i+1] == 0:
#             bestSeatFound = True
#             currentSeat = i
#             break
#         elif seats[i] == 0:
#             currentSeat = i
#     if bestSeatFound:
#         return currentSeat
#     elif currentSeat:
#         return currentSeat
#     else:
#         return -1
def bestSeat(seats):
    left = 0
    maxSpace = 0
    bestSeat = -1
    while left < len(seats)-1:
        right = left + 1
        while seats[right] == 0 and right < len(seats)-1:
            right += 1
            bestSeat = right-2
        left = right
    return bestSeat
seats = [1, 0, 1, 0, 0, 0, 1]
print(bestSeat(seats))
