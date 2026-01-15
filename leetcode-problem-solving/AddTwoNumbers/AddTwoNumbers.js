/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p1 = l1;
  let p2 = l2;

  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;
  let res = 0;
  while (p1 || p2 || carry) {
    let val1 = p1 ? p1.val : 0;
    let val2 = p2 ? p2.val : 0;
    res = val1 + val2 + carry;
    if (res > 9) {
      carry = 1;
      res = res - 10;
    } else {
      carry = 0;
    }
    current.next = new ListNode(res);
    current = current.next;
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }
  return dummy.next;
};
