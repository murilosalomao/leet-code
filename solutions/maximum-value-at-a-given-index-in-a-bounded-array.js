// O(n)
var maxValue = function (n, index, maxSum) {
  if (n == 1) return maxSum;

  maxSum -= n;
  if (maxSum == 0) return 1;

  let maxValue = 1;
  let i = 0;
  let numsToTheLeft = 0;
  let numsToTheRight = 0;
  while (index - i >= 0 || index + i < n) {
    let totalNums = 1;
    if (index - i >= 0) numsToTheLeft = i;
    if (index + i < n) numsToTheRight = i;
    totalNums = totalNums + numsToTheLeft + numsToTheRight;
    if (maxSum - totalNums < 0) return maxValue;

    maxValue++;
    maxSum -= totalNums;
    i++;
  }

  return maxValue + parseInt(maxSum / n);
};
