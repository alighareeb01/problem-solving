/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let temp = s.split("");
  let arr = [];
  let length = 1;
  if (s.length === 0) {
    return 0;
  }
  arr.push(temp[0]);
  for (let i = 1; i < temp.length; i++) {
    let l = 0;
    if (arr.includes(temp[i])) {
      let idx = arr.indexOf(temp[i]);
      arr = arr.slice(idx + 1);
      arr.push(temp[i]);
    } else {
      arr.push(temp[i]);
    }
    length = Math.max(length, arr.length);
  }
  return length;
};
