class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let no = [];
    for (let i = 0; i < s.length; i++) {
      if (/[a-zA-Z0-9]/.test(s[i])) {
        no.push(s[i].toLocaleLowerCase());
      }
    }
    return no.join("") === no.reverse().join("");
  }
}
