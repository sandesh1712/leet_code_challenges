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
 * @return {boolean}
 */
export var isBalanced = function(root) {
   
    function getHeight(node){
       if(node){
         let leftHeight = 1+getHeight(node.left);
         let rightHeight = 1+getHeight(node.right);
         return Math.max(leftHeight,rightHeight);
       }
       return 0;
    }
 
     if(root){
         let leftHeight = getHeight(root.left);
         let rightHeight = getHeight(root.right);
         return (Math.abs(leftHeight-rightHeight)< 2) &&
         isBalanced(root.left) &&
         isBalanced(root.right); 
     }
     return true;
 };