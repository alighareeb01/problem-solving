/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let x = [];
  for (let i = 0; i < m; i++) {
    x.push(nums1[i]);
  }

  for (let i = 0; i < n; i++) {
    x.push(nums2[i]);
  }
  x.sort((a, b) => a - b);
  nums1.splice(0, nums1.length, ...x);
}
