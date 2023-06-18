class Solution {
public:
  int MOD = 1000000007;

  int countPaths(vector<vector<int>>& grid) {
      vector<vector<int>> memo(grid.size(), vector<int>(grid[0].size(), -1));
      
      int counter = 0;
      for (int i=0; i<grid.size(); i++) {
          for (int j=0; j<grid[i].size(); j++) {
            counter++;
            if (memo[i][j] == -1) {
              memo[i][j] = count(grid, i, j, memo) % MOD;
            }
              counter = (int) ((long) counter + memo[i][j]) % MOD;
          }
      }

      return counter;
  }

    int count(vector<vector<int>>& grid, int i, int j, vector<vector<int>>& memo) {
      if (memo[i][j] != -1) return memo[i][j];

      int counter = 0;

      // right
      if (j < grid[i].size() - 1 && grid[i][j+1] > grid[i][j]) {
        if (memo[i][j+1] == -1) memo[i][j+1] = count(grid, i, j+1, memo) % MOD;
        counter += memo[i][j+1] + 1;
      }

      // down
      if (i < grid.size() - 1 && grid[i+1][j] > grid[i][j]) {
        if (memo[i+1][j]) memo[i+1][j] = count(grid, i+1, j, memo) % MOD;
          counter += memo[i+1][j] + 1;
      }

      // left
      if (i > 0 && grid[i-1][j] > grid[i][j]) {
        if (memo[i-1][j]) memo[i-1][j] = count(grid, i-1, j, memo) % MOD;
          counter += memo[i-1][j] + 1;
      }

      // up
      if (j > 0 && grid[i][j-1] > grid[i][j]) {
        if (memo[i][j-1] == -1) memo[i][j-1] = count(grid, i, j-1, memo) % MOD;
        counter += memo[i][j-1] + 1;
      }

      return counter % MOD;
    }
};
