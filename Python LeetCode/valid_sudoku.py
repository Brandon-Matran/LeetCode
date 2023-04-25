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
