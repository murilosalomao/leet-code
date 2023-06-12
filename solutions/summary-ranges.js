var summaryRanges = function (nums) {
  const ranges = [];

  if (!nums.length) return ranges;

  let currentRange = {
    start: nums[0],
  };

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1] + 1) {
      currentRange.end = nums[i];
    } else {
      ranges.push(
        `${currentRange.start}${
          currentRange.end ? `->${currentRange.end}` : ""
        }`
      );
      currentRange = { start: nums[i] };
    }
  }

  ranges.push(
    `${currentRange.start}${currentRange.end ? `->${currentRange.end}` : ""}`
  );

  return ranges;
};
