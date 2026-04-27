class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    let arr = [];
    let sum = 1;
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (j != i) {
          sum *= nums[j];
        }
      }
      if (sum == -0) {
        sum = 0;
      }
      arr.push(sum);
      sum = 1;
    }
    return arr;
  }
}
