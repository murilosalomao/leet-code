// O(n)
var twoSum = function (nums, target) {
  const dict = {};
  Object.entries(nums).forEach(([k, v]) => {
    dict[v] = k;
  });

  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    if (dict[rest] != undefined && dict[rest] != i)
      return [i, parseInt(dict[rest])];
  }
};
