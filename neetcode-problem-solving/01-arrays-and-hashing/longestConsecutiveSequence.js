class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const myHashSet = new Set(nums);

    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
      let current = nums[i];

      if (!myHashSet.has(current - 1)) {
        let count = 1;

        while (myHashSet.has(current + 1)) {
          count++;
          current++;
        }
        maxLen = Math.max(maxLen, count);
      }
    }
    return maxLen;
  }
}
