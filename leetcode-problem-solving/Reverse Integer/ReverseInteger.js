/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rem;
  let rev = 0;
  let sign = 1;
  if (x < 0) {
    x = x * -1;
    sign = -1;
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
  return rev;
};
