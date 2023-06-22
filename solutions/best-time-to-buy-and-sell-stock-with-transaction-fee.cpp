class Solution {
public:
  int maxProfit(vector<int>& prices, int fee) {
    int owningStockProfit = -prices[0];
    int notOwningStockProfit = 0;

    for (int i=1; i<prices.size(); i++) {
      int tempOwningStockProfit = owningStockProfit;
      owningStockProfit = max(owningStockProfit, notOwningStockProfit - prices[i]);
      notOwningStockProfit = max(notOwningStockProfit, tempOwningStockProfit + prices[i] - fee);
    }

    return notOwningStockProfit;
  }
};