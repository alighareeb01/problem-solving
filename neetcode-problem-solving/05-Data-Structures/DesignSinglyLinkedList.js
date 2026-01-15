class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next; //
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    const NewNode = new Node(val);

    if (this.head === null) {
      this.head = NewNode;
      this.size++;
      return;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = NewNode;
    }
    this.size++;
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    if (index < 0 || index >= this.size) {
      return false;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return true;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
    this.size--;
    return true;
  }

  /**
   * @return {number[]}
   */
  getValues() {
    let arr = [];

    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}
