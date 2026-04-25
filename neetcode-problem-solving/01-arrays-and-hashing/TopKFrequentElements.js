class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const freq = {};

    nums.forEach((el) => {
      freq[el] = (freq[el] || 0) + 1;
    });
    const x = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    let arr = [];
    for (let i = 0; i < k; i++) {
      arr.push(Number(x[i][0]));
    }
    return arr;
  }
}
