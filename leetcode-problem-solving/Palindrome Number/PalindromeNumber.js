/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  let rem;
  let rev = 0;
  let sign = 1;
  let temp = x;
  if (x < 0) {
    return false;
  }
  while (x > 0) {
    rem = x % 10;
    x = Math.floor(x / 10);
    rev = rev * 10 + rem;
  }
  rev *= sign;

  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  if (rev < INT_MIN || rev > INT_MAX) {
    return 0;
  }
  return rev === temp;
};
