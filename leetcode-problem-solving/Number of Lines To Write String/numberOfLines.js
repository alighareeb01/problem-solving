let widths = [
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10,
];
let s = "abcdefghijklmnopqrstuvwxyz";

var numberOfLines = function (widths, s) {
  let numOfLines = 1;
  let width = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = s[i].charCodeAt(0) - 97;

    if (width + widths[curr] <= 100) {
      console.log("here", i);

      width += widths[curr];
    } else {
      numOfLines++;
      width = widths[curr];
    }
  }
  return [numOfLines, width];
};
let y = "a";

console.log(numberOfLines(widths, s));
