class Solution {
 public:
  int climbStairs(int n) {
    if (n <= 2) return n;

    int nMinus2 = 1, nMinus1 = 2;
    int curr;

    for (int i = 2; i < n; i++) {
      curr = nMinus1 + nMinus2;
      nMinus2 = nMinus1;
      nMinus1 = curr;
    }

    return curr;
  }
};