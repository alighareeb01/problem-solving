/**
 * @param {string} s
 * @return {number}
 */

var c = function (s) {
  let temp = s.split("");
  let x = [];
  let reg = /[0-9]/;
  let sign = 1;
  let i = 0;

  //white spaces
  while (i < temp.length && temp[i] === " ") {
    i++;
  }

  //sign
  if (temp[i] === "-" || temp[i] === "+") {
    sign = temp[i] === "-" ? -1 : 1;
    i++;
  }
  //get digits
  while (i < temp.length && reg.test(temp[i])) {
    x.push(temp[i]);
    i++;
  }

  //convert
  let result = 0;
  for (let j = 0; j < x.length; j++) {
    result = result * 10 + (x[j] - "0");
  }
  result *= sign;
  // clamp
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  if (result < INT_MIN) return INT_MIN;
  if (result > INT_MAX) return INT_MAX;
  return result;
};
