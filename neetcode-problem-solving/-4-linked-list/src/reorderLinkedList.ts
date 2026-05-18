class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null) {
    this.val = val;
    this.next = next;
  }
}

// let node6: ListNode = new ListNode(6);
// let node5: ListNode = new ListNode(5, node6);
// let node4 = new ListNode(4, node5);
// let node3 = new ListNode(3, node4);
// let node2 = new ListNode(2, node3);
// let node1 = new ListNode(1, node2);
// let node0 = new ListNode(0, node1);
// let list = node0;

class Solution {
  reverseList(head: ListNode | null): ListNode | null {
    let curr = head;
    let prev: ListNode | null = null;

    while (curr) {
      let next: ListNode | null = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  }

  reorderList(head: ListNode | null): void {
    if (!head || !head.next) return;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
      slow = slow!.next;
      fast = fast.next.next;
    }

    let second = this.reverseList(slow!.next);
    slow!.next = null;

    let first: ListNode | null = head;

    while (second) {
      let temp1: ListNode | null = first!.next;
      let temp2: ListNode | null = second.next;

      first!.next = second;
      second.next = temp1;

      first = temp1;
      second = temp2;
    }
  }
}
// let sol = new Solution();
// let reordered = sol.reorderList(list);

// sol.printList(reordered);
