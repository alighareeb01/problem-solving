let s = "Was it a car or a cat I saw?";

let left = 0;
let right = s.length - 1;

const isAplpha = (str) => /^[a-zA-Z0-9]$/.test(str);

while (left < right) {
  if (!isAplpha(s[left])) {
    left++;
    continue;
  }
  if (!isAplpha(s[right])) {
    right--;
    continue;
  }
  if (s[left].toLowerCase() !== s[right].toLowerCase()) {
    return false;
  }
  left++;
  right--;
}
