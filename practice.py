# def funcHopSkipJump(matrix):
# 	# Write your code here
# 	n = len(matrix)
# 	m = len(matrix[0])
# 	i, j = 0, 0
# 	di, dj = 0, 1
# 	while i >= 0 and i < n and j >= 0 and j < m:
# 		if matrix[i][j]==0:
# 			break
# 		if matrix[i][j] % 2 == 1:
# 			di, dj = dj, -di
# 		i, j = i + di, j + dj
# 	return matrix[i-di][j-dj]


# matrix = [[29,8,37],[15,41,3],[1,10,14]]
# print(funcHopSkipJump(matrix))

def funcHopSkipJump(matrix):
    n = len(matrix)
    m = len(matrix[0])
    i, j = 0, 0
    di, dj = 0, 1
    last_val = 0
    while i >= 0 and i < n and j >= 0 and j < m:
        if matrix[i][j] == 0:
            break
        if matrix[i][j] % 2 == 1:
            di, dj = dj, -di
        last_val = matrix[i][j+1]
        matrix[i][j] = 0
        i, j = i + di, j + dj
    return last_val
# def funcHopSkipJump(matrix):
#     # Write your code here
#     n = len(matrix)
#     m = len(matrix[0])
#     i, j = 0, 0
#     di, dj = 1, 1
#     while i >= 0 and i < n and j >= 0 and j < m:
#         if matrix[i][j] % 2 == 0:
#             break
#         if matrix[i][j] % 2 == 1:
#             di, dj = dj, di
#         i, j = i + di, j + dj
#     return matrix[i-di][j-dj]

print(funcHopSkipJump([[29,8,37],[15,41,3],[1,10,14]]))
