// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input: nums = [0]
// Output: [0]
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {

// };

const arr = [0, 1, 0, 3, 12];

let i = 0;

let j = 0;

let place = 0;

console.log(arr.length);
console.log(arr.length - 1);
console.log(i);

while (i <= arr.length - 1) {
  if (arr[i] === 0) j++;
  if (arr[i] !== 0) {
    arr[place] = arr[i];
    place++;
  }
  i++;
}

while (j !== 0) {
  console.log(place, "ad");

  arr[place++] = 0;
  j--;
}
console.log(arr);
