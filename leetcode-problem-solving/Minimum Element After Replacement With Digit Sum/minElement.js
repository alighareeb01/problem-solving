let nums = [10, 12, 13, 14];

function returnEl(num) {
  let sum = 0;
  while (num !== 0) {
    let mod = num % 10;
    num = Math.floor(num / 10);

    sum += mod;
  }
  return sum;
}

var minElement = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = returnEl(nums[i]);
  }

  return Math.min(...nums);
};

console.log(returnEl(145));

// console.log(minElement(nums));
