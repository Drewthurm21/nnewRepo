'''
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated
according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Example 1:
Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:

Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation:
since there are two 8's in the first column, it is invalid.
Since there are two 8's in the top left 3x3 sub-box, it is invalid.
'''


def isValid(board):
    seen = set()
    for x in board:
        if x != '.' and x in seen:
            return False
        seen.add(x)
    return True


def isValidSudoku(board):
    for row in board:
        if not isValid(row):
            return False

    for col in zip(*board):
        if not isValid(col):
            return False

    for i in (0, 3, 6):
        for j in (0, 3, 6):
            box = [board[x][y] for x in range(i, i+3) for y in range(j, j+3)]
            if not isValid(box):
                return False
    return True
