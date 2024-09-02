/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let stk = [];
    let curr = head;
    let num = n;
    
    while(curr){
        stk.push(curr);
        curr = curr.next;
    }

    if(stk.length == n)
      return head.next;

    while(--n){
        stk.pop();
    }

    if(stk.length == 1 && num == 1)
      return null;
    
     let toBeRemoved = stk.pop();
     let beforeRemoved = stk.pop();
     beforeRemoved.next = toBeRemoved ? toBeRemoved.next : null;

    return head;    
};

//https://leetcode.com/problems/remove-nth-node-from-end-of-list/