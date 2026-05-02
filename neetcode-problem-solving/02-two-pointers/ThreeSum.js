class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    const res = [];

    while (left < right) {
      const x = nums[left] + nums[right];

      if (x < target) {
        left++;
      } else if (x > target) {
        right--;
      } else {
        res.push([nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      }
    }
    return res;
  }
  getRest(nums, i) {
    return nums.slice(i + 1);
  }
  threeSum(nums) {
    const arr = [];
    const set = new Set();
    const sortedNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
      const target = sortedNums[i];

      const rest = this.getRest(sortedNums, i);

      let x = this.twoSum(rest, -target);
      for (let el of x) {
        const triplet = [target, ...el].sort((a, b) => a - b);

        const key = triplet.join(",");

        if (!set.has(key)) {
          set.add(key);
          arr.push(triplet);
        }
      }
    }
    return arr;
  }
}
