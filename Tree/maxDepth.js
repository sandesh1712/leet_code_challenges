/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export var maxDepth = function(root) {
    if(root){
        let leftHeight = 1 + maxDepth(root.left);
        let rightHeight = 1 + maxDepth(root.right);
        return Math.max(leftHeight,rightHeight);
    }
    return 0;
};