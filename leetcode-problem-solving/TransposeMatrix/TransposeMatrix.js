/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let temp = [];
  let rows = matrix.length;
  let cols = matrix[0].length;
  for (let i = 0; i < cols; i++) {
    temp[i] = [];
    for (let j = 0; j < rows; j++) {
      temp[i][j] = matrix[j][i];
    }
  }
  return temp;
};
