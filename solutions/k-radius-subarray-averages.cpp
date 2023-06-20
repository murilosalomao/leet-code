class Solution {
  public:
    vector<int> getAverages(vector<int>& nums, int k) {
      if (k == 0) return nums;

      vector<int> averages;
      long sum = 0;
      bool firstSum = true;

      for (int i=0; i<nums.size(); i++) {
        if (i < k || i >= nums.size() - k) {
          averages.push_back(-1);
        } else {
          if (firstSum) {
            for (int j=i-k; j<=i+k; j++) {
              sum += nums[j];
            }
            firstSum = false;
          } else {
            sum = sum - nums[i-k-1] + nums[i+k];
          }

          averages.push_back(sum / (2*k + 1));
        }
      }

      return averages;
    }
};