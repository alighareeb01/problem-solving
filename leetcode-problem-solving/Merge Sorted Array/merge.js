let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
let x = [];
function merge(nums1, m, nums2, n) {
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] !== 0) {
            x.push(nums1[i]);
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (nums2[i] !== 0) {
            x.push(nums2[i]);
        }
    }
    nums1 = [...x];
    console.log(nums1);
}
// console.log(nums1);
merge(nums1, m, nums2, n);
export {};
