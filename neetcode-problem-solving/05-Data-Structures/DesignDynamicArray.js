class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
    this.MyArray = new Array(capacity);
    this.capacity = capacity;
    this.size = 0;
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    return this.MyArray[i];
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
    if (i >= 0 && i < this.size) {
      this.MyArray[i] = n;
    } else {
      throw new Error("Index out of bounds");
    }
  }

  /**
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
    if (this.size >= this.capacity) {
      // check if array is full
      this.resize(); // double capacity
    }
    this.MyArray[this.size++] = n;
  }

  /**
   * @returns {number}
   */
  popback() {
    if (this.size === 0) {
      throw new Error("Array is empty");
    }
    return this.MyArray[--this.size];
  }

  /**
   * @returns {void}
   */
  resize() {
    const newCapacity = this.capacity * 2;
    const newArray = new Array(newCapacity);

    // Copy existing elements to the new array
    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.MyArray[i];
    }

    // Replace old array with the new one
    this.MyArray = newArray;
    this.capacity = newCapacity;
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.size;
  }

  /**
   * @returns {number}
   */
  getCapacity() {
    return this.capacity;
  }
}
