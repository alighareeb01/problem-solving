class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

let node6 = new ListNode(6);
let node5 = new ListNode(5, node6);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);
let node0 = new ListNode(0, node1);
let list = node0;

class Solution {
  printList(head) {
    let curr = head;
    while (curr != null) {
      process.stdout.write(curr.val + " -> ");
      curr = curr.next;
    }
    console.log("null");
  }
  reverseList(head) {
    let curr = head;
    let next = null;
    let prev = null;
    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
  mergeTwoLinkedList(list1, list2) {
    let curr = list1;
    if (curr === null) {
      return list2;
    }
    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = list2;

    let arr = [];
    curr = list1;
    while (curr !== null) {
      arr.push(curr?.val);
      curr = curr.next;
    }
    arr.sort((a, b) => a - b);

    curr = list1;
    for (let i = 0; i < arr.length; i++) {
      curr.val = arr[i];
      curr = curr.next;
    }

    return list1;
  }
  removeNthFromEnd(head, n) {
    let dummy = new ListNode(-1, head);
    let leader = dummy;
    let trailer = dummy;
    for (let i = 0; i < n; i++) {
      leader = leader.next;
      if (!leader) {
        return head;
      }
    }
    while (leader.next !== null) {
      leader = leader.next;
      trailer = trailer.next;
    }
    trailer.next = trailer.next.next;
    return dummy.next;
  }
  reorderList(head) {
    let first = head;
    let last = head;
    let curr = head;
    while (last.next !== null) {
      last = last.next;
    }
    while (first < last) {
      curr = curr.next;
      first.next = last;
      last.next = curr;
      first = curr;
    }
    return head;
  }
}

let sol = new Solution();
let reordered = sol.reorderList(list);

sol.printList(reordered);
