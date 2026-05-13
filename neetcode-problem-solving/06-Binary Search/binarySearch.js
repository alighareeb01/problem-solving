class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = Math.trunc((left + right) / 2);

      if (nums[mid] === target) {
        return mid;
      }
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
}

let nums = [-1, 0, 2, 4, 6, 8];
let target = 4;
let sol = new Solution();
let se = sol.search(nums, target);
console.log(se);
