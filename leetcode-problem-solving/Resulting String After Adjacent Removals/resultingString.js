class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const popped = this.top;
    this.top = this.top.next;

    popped.next = null;

    this.length--;

    return popped.val;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  print() {
    let curr = this.top;
    while (curr !== null) {
      console.log(curr.val);
      curr = curr.next;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.top.val;
  }

  toString() {
    let result = "";
    let curr = this.top;

    while (curr !== null) {
      result = curr.val + result;
      curr = curr.next;
    }

    return result;
  }
}

var resultingString = function (s) {
  const stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    if (!stack.isEmpty()) {
      const diff = Math.abs(stack.peek().charCodeAt(0) - s[i].charCodeAt(0));

      if (diff === 1 || diff === 25) {
        stack.pop();
        continue;
      }
    }
    stack.push(s[i]);
  }
  return stack.toString();
};
