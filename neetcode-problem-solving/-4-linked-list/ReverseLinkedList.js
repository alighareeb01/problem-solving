/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    let curr = head;
    let prev = null;
    let next = head;
    if (head === null) {
      return head;
    }
    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
}

function printList(head) {
  let curr = head;
  while (curr != null) {
    process.stdout.write(curr.val + " -> ");
    curr = curr.next;
  }
  log(null);
}
