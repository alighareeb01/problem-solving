class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

let list1Node4 = new ListNode(4);
let list1Node2 = new ListNode(2, list1Node4);

let list1Node1 = new ListNode(1, list1Node2);

let list1 = list1Node1;

let list2Node5 = new ListNode(5);
let list2Node3 = new ListNode(3, list2Node5);
let list2Node1 = new ListNode(1, list2Node3);

let list2 = list2Node1;

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

    // curr.next = list2;
    // console.log(curr.next);

    // console.log("list1=>>", list1);
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
}

let sol = new Solution();
let merged = sol.mergeTwoLinkedList(list1, list2);
sol.printList(merged);
// sol.printList(merged);
// let reversed = sol.reverseList(list1);
// printList(reversed);
