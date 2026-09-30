/**
 *
 *
 *
 *
 *
 *
 *
 * THIS SOULTION EXCEED TIME FOR MAKING
 * LONG ARR if n =999999 for example
 */
// var bulbSwitch = function (n) {
//   let arr = Array.from({ length: n }, (_, i) => 1);
//   console.log("round 1", arr);

//   for (let round = 2; round <= n; round++) {
//     arr[round - 1] ^= 1;
//     console.log("===========================");

//     console.log(`round ${round} . arr ${arr} . arr[${round}] ${arr[round]}`);
//     let mul = round * 2;

//     console.log("mul ten", mul);

//     while (mul - 1 < n) {
//       console.log("mul here", mul);

//       arr[mul - 1] ^= 1;
//       console.log("arr final", arr);
//       mul = mul + round;
//     }
//   }

//   return arr.filter((el) => el === 1).length;
// };

var bulbSwitch = function (n) {
  let divCount = 0;
  for (let i = 1; i <= n; i++) {
    if (Math.pow(i, 2) <= n) {
      divCount++;
    }
  }
  return divCount;
  //return Math.floor(Math.sqrt(n));
};

console.log(bulbSwitch(9999999));
