from typing import List


class Solution:
    def updateMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        # m is row
        # n is column
        m, n = len(matrix), len(matrix[0])

        # Iterating from topmost leftmost going from top-down left-right
        for i, row in enumerate(matrix):
            for j, cell in enumerate(row):

                # take advantage of 0 being falsy
                # if not 0
                if cell:
                    # inbounds logic
                    # if index is at least 1 or more (prevents index out of range)      # noqa
                    # otherwise use infinity since we will be using min()

                    # top value is the value at row-1
                    # left value is the value at col-1

                    top = matrix[i - 1][j] if i else float("inf")
                    left = matrix[i][j - 1] if j else float("inf")

                    # compare values between top and left
                    # reassign the value at the cell to be the smaller of the 2, plus one # noqa
                    matrix[i][j] = min(top, left) + 1

        print("Matrix after first pass")
        for row in matrix:
            print(row)
        print("=======================")

        # Iterating from bottommost rightmost going from down-top right-left
        # reversed is faster than splicing [::-1]
        for i in reversed(range(m)):
            for j in reversed(range(n)):

                # walrus operator assigns and then returns the value
                if cell := matrix[i][j]:

                    # inbounds logic
                    # if index is less than max row/col (minus 1 due to 0 index)        # noqa
                    # otherwise use infinity since we will be using min()

                    # bottom value is the value at row+1
                    # right value is the value at col+1

                    bottom = matrix[i + 1][j] if i < m - 1 else float("inf")
                    right = matrix[i][j + 1] if j < n - 1 else float("inf")

                    # compare values between current value and bottom and right (+1 to include steps)       # noqa
                    # reassign the value at the cell to be the smallest of the 3        # noqa
                    matrix[i][j] = min(cell, bottom + 1, right + 1)

        print("Matrix after second pass")
        for row in matrix:
            print(row)
        print("=======================")

        return matrix


mat = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
    ]
print(Solution().updateMatrix(mat))
