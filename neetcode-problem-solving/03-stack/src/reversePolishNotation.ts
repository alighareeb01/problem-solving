let tokens = ["1", "2", "+", "3", "*", "4", "-"];
function evalRPN(tokens: string[]) {
  const stack = [];
  for (const token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      const b: number = Number(stack.pop());
      const a: number = Number(stack.pop());

      let res: number = 0;
      if (token === "+") res = a + b;
      if (token === "*") res = a * b;
      if (token === "/") res = a / b;
      if (token === "-") res = a - b;

      stack.push(res);
    } else {
      stack.push(token);
    }
  }
  return stack[0];
}

console.log(evalRPN(tokens));
