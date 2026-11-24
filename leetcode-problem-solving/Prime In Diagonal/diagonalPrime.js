function isPrime(num) {
  if (num === 2) {
    return true;
  }
  if (num < 2 || num % 2 === 0) {
    return false;
  }

  for (let i = 3; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(17));

const arr = [];
var diagonalPrime = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i][i];
    const second = nums[i][nums.length - i - 1];

    if (isPrime(first)) {
      maxPrime = maxPrime > first ? maxPrime : first;
    }

    if (isPrime(second)) {
      maxPrime = maxPrime > second ? maxPrime : second;
    }
    // arr.push(...arr, nums[i][i], nums[i][nums.length - i - 1]);
  }
  return maxPrime;
};

console.log(
  diagonalPrime([
    [1, 2, 3],
    [5, 6, 7],
    [9, 10, 11],
  ]),
);
