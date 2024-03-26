/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums = nums.map(num => num < 0 ? 0 : num);

    for (let i=0; i<nums.length; i++) {
        if (nums[i] != NaN && nums[i] != 0 && nums[i] <= nums.length) {
            const indexToLookAt = Math.abs(nums[i]) - 1;

            if (nums[indexToLookAt] == 0) {
                nums[indexToLookAt] = NaN;
            } else if (nums[indexToLookAt] > 0) {
                nums[indexToLookAt] *= -1;
            }
        }
    }


    let i;
    for (i=0; i<nums.length; i++) {
        if (nums[i] != NaN && nums[i] >= 0) {
            return i+1;
        }
    }

   return i+1;
};
