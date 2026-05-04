let nums = [0];

function swap(i, j) {
  [i, j] = [j, i];
}

let i = 1;
let j = 2;

swap(i, j);
console.log(i, j);

var moveZeroes = function (nums) {
  let left = 0;
  let right = 0;
  console.log(nums.length);

  while (right <= nums.length - 1) {
    if (nums[right] === 0) {
      right++;
    } else {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right++;
    }
  }
  return nums;
};

console.log(moveZeroes(nums));
