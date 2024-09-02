/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    let curr = head;
    let newHead = null;
    let curr2;
    let map = new Map();   

    while(curr){
      let newNode = new Node(curr.val,null,null); 
      
      map.set(curr,newNode);
      
      if(!newHead){
        newHead = newNode;
      }else{
        curr2.next = newNode;
      }
       curr2 = newNode;
       curr = curr.next;
    }
    curr = head;
    curr2 = newHead;
    
    while(curr){
      if(curr.random){
        curr2.random = map.get(curr.random);
      }
      curr2 = curr2.next;
      curr = curr.next;
    }

    return newHead
};

//https://leetcode.com/problems/copy-list-with-random-pointer/description/