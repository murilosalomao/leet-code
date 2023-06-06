var checkStraightLine = function (coordinates) {
  if (coordinates.length == 1) return false;
  if (coordinates.length == 2) return true;

  // ax + by = -c
  const a = coordinates[0][1] - coordinates[1][1];
  const b = coordinates[1][0] - coordinates[0][0];
  const c =
    coordinates[0][0] * coordinates[1][1] -
    coordinates[1][0] * coordinates[0][1];

  for (let i = 2; i < coordinates.length; i++) {
    if (a * coordinates[i][0] + b * coordinates[i][1] != -c) return false;
  }

  return true;
};

let a = [
  [1, 1],
  [2, 2],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 7],
];
console.log(checkStraightLine(a));
