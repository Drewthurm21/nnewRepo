/*
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
*/


//bucket sets solution
const checkNeighbors = (board, pos) => {
  let nums = new Set()

  for (let row = pos[0] - 1; row <= pos[0] + 1; row++) {
    for (let col = pos[1] - 1; col <= pos[1] + 1; col++) {
      let curNum = board[row][col]

      if (curNum === '.') continue
      if (nums.has(curNum)) return false

      nums.add(curNum)
    }
  }
  return true
}

const validSudoku = (board) => {

  //check key positions in the grid to search 3x3 squares
  const keyPositions = [
    [1, 1], [1, 4], [1, 7]
    [4, 1], [4, 4], [4, 7]
    [7, 1], [7, 4], [7, 7]
  ]

  for (let pos of keyPositions) if (!checkNeighbors(board, pos)) return false

  //set up hash
  const rows = new Array(9).fill(0)
  const cols = new Array(9).fill(0)
  for (let idx in rows) {
    rows[idx] = new Set()
    cols[idx] = new Set()
  }

  //iterate over the board and check if each num has been seen
  //in this row or col already, using the hash created above
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      let currentNumber = board[row][col]
      if (currentNumber === '.') continue
      if (rows[row].has(currentNumber) || cols[col].has(currentNumber)) return false

      rows[row].add(currentNumber)
      cols[col].add(currentNumber)
    }
  }

  return true
}



console.log(validSudoku(
  [["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))

console.log(validSudoku(
  [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))
