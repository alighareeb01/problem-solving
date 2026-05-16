"use strict";
class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.trunc((left + right) / 2);
            if (nums[mid] === target) {
                return true;
            }
            if (nums[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return false;
    }
    searchMatrix(matrix, target) {
        let matrixArr = [];
        for (let i = 0; i < matrix.length; i++) {
            matrixArr.push(...matrix[i]);
        }
        return this.search(matrixArr, target);
    }
}
