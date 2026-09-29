/**
 * @param {number[]} nums
 * @return {number}
 */

function decimalToBinary(N) {
  return (N >>> 0).toString(2).padStart(32, "0");
}

function arrayToBinary(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = decimalToBinary(nums[i]);
  }

  return nums;
}

var totalHammingDistance = function (nums) {
  let sum = 0;
  const converted = arrayToBinary(nums);

  for (let i = 0; i < 32; i++) {
    let zeros = 0;
    let ones = 0;

    for (let j = 0; j < converted.length; j++) {
      if (converted[j][i] === "1") {
        ones++;
      } else {
        zeros++;
      }
    }
    sum = sum + ones * zeros;
  }
  return sum;
};
