class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  search(nums: number[], target: number): boolean {
    let left: number = 0;
    let right: number = nums.length - 1;

    while (left <= right) {
      let mid: number = Math.trunc((left + right) / 2);

      if (nums[mid] === target) {
        return true;
      }
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return false;
  }

  searchMatrix(matrix: number[][], target: number): boolean {
    let matrixArr: number[] = [];
    for (let i: number = 0; i < matrix.length; i++) {
      matrixArr.push(...matrix[i]);
    }
    return this.search(matrixArr, target);
  }
}
