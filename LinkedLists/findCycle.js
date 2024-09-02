/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let turtle = head;
    let hare = head;
    while(turtle && hare && hare.next){
        turtle = turtle.next;
        hare = hare.next.next;
        if(turtle == hare)
         return true; 
    }
    return false;
};

//https://leetcode.com/problems/linked-list-cycle/