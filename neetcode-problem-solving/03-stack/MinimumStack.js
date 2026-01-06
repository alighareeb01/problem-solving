class Node {
  constructor(val, min) {
    this.data = val;
    this.next = null;
    this.min = min;
  }
}
class MinStack {
  constructor() {
    this.head = null; // renamed from top
  }

  push(val) {
    let min = this.head ? Math.min(val, this.head.min) : val;
    const NewNode = new Node(val, min);
    NewNode.next = this.head;
    this.head = NewNode;
  }

  pop() {
    if (this.head === null) return;
    this.head = this.head.next;
  }

  top() {
    return this.head ? this.head.data : null;
  }

  getMin() {
    return this.head ? this.head.min : null;
  }
}
