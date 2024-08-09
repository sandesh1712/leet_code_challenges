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
var reverseList = function(head) {
    let arr = [];
    let curr = head;

    while(curr){
      arr.push(curr.val)
      curr = curr.next;
    }

    let index = arr.length-1;
    curr = head;
    while(curr){
        curr.val = arr[index--];
        curr = curr.next;
    }
    return head;
};