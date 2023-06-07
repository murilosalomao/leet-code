var rotate = function (matrix) {
  for (let i = 0; i < matrix.length / 2; i++) {
    _rotate(matrix, i);
  }
};

var _rotate = function (matrix, i) {
  const start = i;
  const end = matrix.length - 1;

  for (let j = start; j < end - start; j++) {
    const a = matrix[start][j];
    const b = matrix[j][end - start];
    const c = matrix[end - start][end - j];
    const d = matrix[end - j][start];

    matrix[start][j] = d;
    matrix[j][end - start] = a;
    matrix[end - start][end - j] = b;
    matrix[end - j][start] = c;
  }
};
