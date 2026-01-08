class Stack {
  constructor(size) {
    this.size = size;
    this.top = -1;
    this.StackArray = new Array(size);
  }
  push(val) {
    if (this.top === this.size - 1) {
      return;
    }
    this.StackArray[++this.top] = val;
  }
  pop() {
    if (this.top === -1) {
      return;
    }
    const val = this.StackArray[this.top--];
    return val;
  }
  peek() {
    if (this.top === -1) return null;
    return this.StackArray[this.top];
  }
  isEmpty() {
    return this.top === -1;
  }
  Traverse() {
    for (let i = this.top; i >= 0; i--) {
      console.log(this.StackArray[i]);
    }
  }
}
class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */

  dailyTemperatures(temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const MYstack = new Stack(temperatures.length); 

    for (let i = 0; i < temperatures.length; i++) {
      
      while (
        !MYstack.isEmpty() &&
        temperatures[i] > temperatures[MYstack.peek()]
      ) {
        const popped = MYstack.pop(); // popped is index
        res[popped] = i - popped;
      }
      // Push current day index
      MYstack.push(i);
    }

    return res;
  }
}
