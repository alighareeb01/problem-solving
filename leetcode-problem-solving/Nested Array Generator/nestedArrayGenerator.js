/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* inorderTraversal(item);
    } else {
      yield item;
    }
  }
};
const x = inorderTraversal([[[6]], [1, 3], []]);

console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
// Input: arr = [[[6]],[1,3],[]]
// Output: [6,1,3]
// Explanation:
// const generator = inorderTraversal(arr);
// generator.next().value; // 6
// generator.next().value; // 1
// generator.next().value; // 3
// generator.next().done; // true
/**TYPE SCRIPT */
// type MultidimensionalArray = (MultidimensionalArray | number)[]

// function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
//  for(const item of arr){
//     if(Array.isArray(item)){
//         yield* inorderTraversal(item)
//     }
//     else{
//         yield item
//     }
//  }
// };

// /**
//  * const gen = inorderTraversal([1, [2, 3]]);
//  * gen.next().value; // 1
//  * gen.next().value; // 2
//  * gen.next().value; // 3
//  */
