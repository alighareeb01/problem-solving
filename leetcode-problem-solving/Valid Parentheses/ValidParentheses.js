/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  let tempArr = s.split("");
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === "(" || tempArr[i] === "{" || tempArr[i] === "[") {
      stack.push(tempArr[i]);
    } else {
      if (stack.length === 0) return false;

      let top = stack.pop();
      if (
        (tempArr[i] === ")" && top !== "(") ||
        (tempArr[i] === "}" && top !== "{") ||
        (tempArr[i] === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
