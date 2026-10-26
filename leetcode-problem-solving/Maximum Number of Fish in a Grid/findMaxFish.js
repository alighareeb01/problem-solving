let grid = [[0, 2, 1, 1]];

let maxFish = [];
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    console.log(`i : ${i}, j : ${j}`);

    //i =1,j=2
    if (grid[i][j] !== 0) {
      console.log("here -->", `i : ${i}, j : ${j}`);

      maxFish.push(grid[i][j]);

      //check adjacent

      if (grid[i][j + 1] !== 0) {
        maxFish.push(grid[i][j + 1]);
      }
      break;
    }
  }
}

// console.log(maxFish);
maxFish.push(2);
console.log(maxFish);
