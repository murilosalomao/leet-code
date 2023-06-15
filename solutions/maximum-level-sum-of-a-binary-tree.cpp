class Solution {
public:
    int maxLevelSum(TreeNode* root) {
        vector<int> sumByLevel;
        searchTree(root, sumByLevel, 1);

        int maxSum = INT_MIN;
        int index = -1;
        for (int i=0; i<sumByLevel.size(); i++) {
            if (sumByLevel[i] > maxSum) {
                maxSum = sumByLevel[i];
                index = i;
            }
        }

        return index + 1;
    }

    void searchTree(TreeNode* node, vector<int>& sumByLevel, int level) {
        if (sumByLevel.size() < level) {
            sumByLevel.push_back(node->val);
        } else {
            sumByLevel[level-1] += node->val;
        }

        if (node->left != nullptr) searchTree(node->left, sumByLevel, level+1);
        if (node->right != nullptr) searchTree(node->right, sumByLevel, level+1);
    }
};