// O(logn + n)
var searchRange = function (nums, target) {
  if (nums.length == 0) return [-1, -1];

  const index = binarySearch(nums, 0, nums.length - 1, target);

  if (index == -1) return [-1, -1];

  let minIndex = index;
  let maxIndex = index;
  let updated = true;
  let i = 1;
  while (updated && (index + i < nums.length || index - i >= 0)) {
    updated = false;

    if (index - i >= 0 && nums[index - i] == target) {
      minIndex = index - i;
      updated = true;
    }
    if (index + i < nums.length && nums[index + i] == target) {
      maxIndex = index + i;
      updated = true;
    }

    i++;
  }

  return [minIndex, maxIndex];
};

var binarySearch = function (nums, startIndex, endIndex, target) {
  const middle = parseInt((startIndex + endIndex) / 2);
  if (nums[middle] == target) return middle;
  if (nums[middle] > target && startIndex < middle)
    return binarySearch(nums, startIndex, middle - 1, target);
  if (nums[middle] < target && endIndex > middle)
    return binarySearch(nums, middle + 1, endIndex, target);
  return -1;
};
