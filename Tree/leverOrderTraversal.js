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
 * @return {number[][]}
 */
var levelOrder = function(root) { 
    let result = [];
    let queue = [];
    
    if(root)
      queue.push(root);
    
    while(queue.length > 0){
       let secondaryQueue = [];
       let l = queue.length;
       while(l--){
        let node = queue.shift();
        secondaryQueue.push(node.val);
        if(node.left)
          queue.push(node.left);
        if(node.right) 
          queue.push(node.right);
       }
       result.push(secondaryQueue);
    }
    return result;
};