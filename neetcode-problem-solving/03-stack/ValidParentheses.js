class Stack{
    constructor(size)
    {
        this.size = size;
        this.top = -1;
        this.StackArray = new Array(size);
    }
    push(val)
    {
        if(this.top === this.size - 1)
        {
            return;
        }
        this.StackArray[++this.top] = val;
    }
    pop()
    {
        if(this.top === -1)
        {
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
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = new Stack(10);

    const match = {
      ')': '(',
      '}': '{',
      ']': '[',
    };

    for (let ch of s) {
      // opening bracket
      if (ch === '(' || ch === '{' || ch === '[') {
        stack.push(ch);
      } 
      // closing bracket
      else {
        if (stack.isEmpty()) return false;

        const top = stack.pop();
        if (top !== match[ch]) return false;
      }
    }

    return stack.isEmpty();
  }
}
