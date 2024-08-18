/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let stk = [];
    
    let ansestor;
    
    stk.push(root);

    while(stk.length > 0){
       let curr = stk.pop();   
       if(curr.val > p.val && curr.val > q.val)
         stk.push(curr.left);
       else if(curr.val < p.val && curr.val < q.val)
         stk.push(curr.right);
       else 
        ansestor = curr;
    }
    return ansestor;
};

//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/