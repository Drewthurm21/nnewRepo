`
Create a function that takes in a matrix. The matrix is
currently in the structure of columns. The function should return the matrix
in the structure of rows.

Bonus 1: This can be solved in a single
line of code.

Bonus 2: Try changing the matrix from rows back into
columns. 
`

const matrix_rows = (matrix) => {
  const rows = []
  const len = matrix[0].length

  let i = 0
  while (i < len) {
    let row = []
    for (const item of matrix) row.push(item[i])
    rows.push(row)
    i++
  }
  return rows
}

console.log(matrix_rows([[8, 2], [6, 3], [3, 7], [1, 2]]))  // -> [[8, 6, 3, 1], [2, 3, 7, 2]]
console.log(matrix_rows([[1, 4], [3, 2], [1, 0], [9, 7]]))  // -> [[1, 3, 1, 9], [4, 2, 0, 7]]
console.log(matrix_rows([[5, 6], [2, 8], [5, 2], [1, 0]]))  // -> [[5, 2, 5, 1], [6, 8, 2, 0]]

/*
column = {    ->     row = {
  [8, 2],             [8, 6, 3, 1],
  [6, 3],             [2, 3, 7, 2]
  [3, 7],           }
  [1, 2]
}
*/