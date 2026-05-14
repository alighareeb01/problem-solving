class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let maxLen = 0;
    let left = 0;
    let right = 0;
    const hashSet = new Set();
    while (right < s.length) {
      while (hashSet.has(s[right])) {
        //shrink and delete left from set
        hashSet.delete(s[left]);
        left++;
      }
      //expand and add right to set
      maxLen = Math.max(maxLen, right - left + 1);
      hashSet.add(s[right]);
      right++;
    }
    return maxLen;
  }
}
const s = "abcabcbb";
let sol = new Solution();
console.log(sol.lengthOfLongestSubstring(s));
