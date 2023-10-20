'''
Create a function that takes in a matrix. The matrix is
currently in the structure of columns. The function should 
return the matrix in the structure of rows.

Bonus 1: This can be solved in a single
line of code.

Bonus 2: Try changing the matrix from rows back into
columns. 
'''


def matrix_rows(matrix):
    rows = []
    for idx in range(len(matrix[0])):
        row = []
        for col in matrix:
            row.append(col[idx])
        rows.append(row)
    return rows


def matrix_rows(matrix):
    return [[col[i] for col in matrix] for i in range(len(matrix[0]))]


def matrix_cols(matrix):
    return [list(c) for c in (zip(*matrix))]


print(matrix_rows([[8, 2], [6, 3], [3, 7], [1, 2]]))
# > [[8, 6, 3, 1], [2, 3, 7, 2]]
# print(matrix_rows([[1, 4], [3, 2], [1, 0], [9, 7]]))
# # > [[1, 3, 1, 9], [4, 2, 0, 7]]
# print(matrix_rows([[5, 6], [2, 8], [5, 2], [1, 0]]))
# > [[5, 2, 5, 1], [6, 8, 2, 0]]

'''
column = {    ->     row = {
  [8, 2],             [8, 6, 3, 1],
  [6, 3],             [2, 3, 7, 2]
  [3, 7],           }
  [1, 2]
}
'''
