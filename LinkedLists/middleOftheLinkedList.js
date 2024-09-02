/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let stk = [];
    let curr = head;
    
    while(curr){
        stk.push(curr);
        curr = curr.next;
    }
    
    let l = stk.length;
    
    if(l==0)
      return null;
    
    if(l==1)
     return head;
    
    let m = l%2==0? l/2 : Math.floor(l/2);
    return stk[m]; 
};

//https://leetcode.com/problems/middle-of-the-linked-list/