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
  addTwoNumbers(l1, l2) {
    let f = l1;
    let s = l2;

    let carry = 0;

    while (f || s || carry) {
      // if l1 ended, create new node
      if (!f) {
        f = new ListNode(0);
      }

      let val1 = f ? f.val : 0;
      let val2 = s ? s.val : 0;

      let sum = val1 + val2 + carry;

      f.val = sum % 10;
      carry = Math.floor(sum / 10);

      if (!f.next && (s?.next || carry)) {
        f.next = new ListNode(0);
      }

      f = f.next;

      if (s) s = s.next;
    }

    return l1;
  }
}
