class Solution {
public:
    int getMinimumDifference(TreeNode* root) {
        return findMin(root, INT_MAX);
    }

    int findMin(TreeNode* node, int minDiff) {
        TreeNode* currentNode;
        int diff;
        if (node->left != NULL) {
            currentNode = node->left;
            while (currentNode->right != NULL) currentNode = currentNode->right;
            diff = node->val - currentNode->val;
            if (diff < minDiff) minDiff = diff;
            minDiff = findMin(node->left, minDiff);
        }
        if (node->right != NULL) {
            currentNode = node->right;
            while (currentNode->left != NULL) currentNode = currentNode->left;
            diff = currentNode->val - node->val;
            if (diff < minDiff) minDiff = diff;
            minDiff = findMin(node->right, minDiff);
        }
        return minDiff;
    }
};