var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < s.length; i++) {
    if (obj1[s[i]]) {
      obj1[s[i]]++;
    } else {
      obj1[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (obj2[t[i]]) {
      obj2[t[i]]++;
    } else {
      obj2[t[i]] = 1;
    }
  }

  for (const key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  console.log(obj1);
  console.log(obj2);

  return true;
};

console.log(isAnagram("a", "ab"));
