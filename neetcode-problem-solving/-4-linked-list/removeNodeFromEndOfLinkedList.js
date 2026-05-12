class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// let node4 = new ListNode(4);
// let node3 = new ListNode(3, node4);
// let node2 = new ListNode(2, node3);
// let node1 = new ListNode(1, node2);
let node4 = new ListNode(5);

let list1 = node4;

// let list1Node4 = new ListNode(4);
// let list1Node2 = new ListNode(2, list1Node4);

// let list1Node1 = new ListNode(1, list1Node2);

// let list1 = list1Node1;

// let list2Node5 = new ListNode(5);
// let list2Node3 = new ListNode(3, list2Node5);
// let list2Node1 = new ListNode(1, list2Node3);

// let list2 = list2Node1;

class Solution {
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
  printList(head) {
    let curr = head;
    while (curr != null) {
      process.stdout.write(curr.val + " -> ");
      curr = curr.next;
    }
    console.log("null");
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
}

let sol = new Solution();
let reomved = sol.removeNthFromEnd(list1, 1);
sol.printList(reomved);

// sol.printList(merged);
// let reversed = sol.reverseList(list1);
// printList(reversed);
