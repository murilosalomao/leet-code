class Solution {
public:
  int largestAltitude(vector<int>& gain) {
    int maxAltitude = 0;
    int currentAltitude = 0;
    for (int i=0; i<gain.size(); i++) {
      currentAltitude += gain[i];
      if (currentAltitude > maxAltitude) {
        maxAltitude = currentAltitude;
      }
    }
    return maxAltitude;
  }
};