let Input = ["act", "pots", "tops", "cat", "stop", "hat"];

function sorting(str) {
  return str.split("").sort().join("");
}

const map = {};

Input.forEach((el) => {
  const key = sorting(el);
  if (!map[key]) {
    map[key] = [];
  }
  return map[key].push(el);

  //   map[el].push(el);
});

console.log(map);

// log;
