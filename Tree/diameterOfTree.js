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
var diameterOfBinaryTree = function(root) {
    let diameter=0;

    function getHeight(node){
       if(node){
          let leftHeight = getHeight(node.left);
          let rightHeight = getHeight(node.right);
          diameter = Math.max(diameter,(leftHeight+rightHeight)); 
          return Math.max(leftHeight,rightHeight)+1;
       }
       return 0;
    }

    getHeight(root);

    return diameter;
};