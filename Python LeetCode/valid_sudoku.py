# class Solution:
#     def isValidSudoku(self, board: list[list[str]]) -> bool:
#         """
#         Need to scan each row and compare that to the corresponding column of the board to determine validity.
#         Check to see if each element in the row is a "." or a number.
#         """
#         s = set()
#         for i in range(9): # iterate rhgouh each row
#             for j in range(9): #iterate throug each column
#                 if board[i][j] != ".": #check if the value at the cell is a "." or a number
#                     c = board[i][j] #attaches all the numbers to the c variable

#                     key = f'{c} in row {i}' #map each value in the cell to its row

#                     if key in s:
#                         return False
#                     else:
#                         s.add(key)

#                     key = f'{c} in column {j}' #map each value in the cell to its column

#                     if key in s:
#                         return False
#                     else:
#                         s.add(key)


#                     boxIndex = (i // 3) * 3 + (j // 3) #refers to the 3x3 box within the 9x9 grid, we need to print each number within the box
#                     key = f'{c} in box {boxIndex}'
#                     print(key)
#                     if key in s:
#                         return False
#                     else:
#                         s.add(key)
#         return True

class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        s = set()
        for i in range(9):
            for j in range(9):
                if board[i][j] != ".":
                    c = board[i][j]
                    print(c)

                    key = f'for {c} in row {i}'
                    if key in s:
                        return False
                    else:
                        s.add(key)
                    print(key)

                    key = f'for {c} in col {j}'
                    if key in s:
                        return False
                    else:
                        s.add(key)

                    boxIndex = (i // 3) * 3 + (j // 3)
                    key = f'for {c} in box {boxIndex}'
                    print(key)
                    if key in s:
                        return False
                    else:
                        s.add(key)
        return True


board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]

solution = Solution()
print(solution.isValidSudoku(board))
