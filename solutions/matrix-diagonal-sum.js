// O(n)
var diagonalSum = function (mat) {
  const rowSize = mat[0].length;
  const centerIndex = parseInt(rowSize / 2);

  let sum = 0;
  for (let i = 0; i < mat[0].length; i++) {
    sum += mat[i][i] + mat[i][rowSize - i - 1];
  }

  if (rowSize % 2 == 1) sum -= mat[centerIndex][centerIndex];

  return sum;
};
