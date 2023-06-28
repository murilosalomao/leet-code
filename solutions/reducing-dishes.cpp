class Solution {
 public:
  int maxSatisfaction(vector<int>& satisfaction) {
    sort(satisfaction.begin(), satisfaction.end());

    int maxVal = 0, n = satisfaction.size();
    for (int i = 0; i < n; i++) {
      int time = 1, total = 0;
      for (int j = i; j < n; j++, time++) {
        total += time * satisfaction[j];
      }

      if (total > maxVal) maxVal = total;
    }

    return maxVal;
  }
};