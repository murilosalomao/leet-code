var equalPairs = function (grid) {
  const existingPairsMap = {};
  let numPairs = 0;

  for (let i = 0; i < grid.length; i++) {
    if (!existingPairsMap[grid[i]]) {
      existingPairsMap[grid[i]] = 1;
    } else {
      existingPairsMap[grid[i]]++;
    }
  }

  for (let i = 0; i < grid.length; i++) {
    const tempArray = [];
    for (let j = 0; j < grid[i].length; j++) {
      tempArray.push(grid[j][i]);
    }

    if (existingPairsMap[tempArray]) numPairs += existingPairsMap[tempArray];
  }

  return numPairs;
};
