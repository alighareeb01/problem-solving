"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    val;
    next;
    constructor(val, next) {
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
    reverseList(head) {
        let curr = head;
        let prev = null;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    reorderList(head) {
        if (!head || !head.next)
            return;
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let second = this.reverseList(slow.next);
        slow.next = null;
        let first = head;
        while (second) {
            let temp1 = first.next;
            let temp2 = second.next;
            first.next = second;
            second.next = temp1;
            first = temp1;
            second = temp2;
        }
    }
}
// let sol = new Solution();
// let reordered = sol.reorderList(list);
// sol.printList(reordered);
//# sourceMappingURL=reorderLinkedList.js.map