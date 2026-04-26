class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = [];

    for (let str of strs) {
      res.push(this.encodeSingle(str));
    }

    return res.join("|");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    if (str === "") return [];

    let parts = str.split("|");
    let res = [];

    for (let part of parts) {
      res.push(this.decodeSingle(part));
    }

    return res;
  }

  encodeSingle(str) {
    let arr = [];
    let arrDecoded = [];

    let splitted = str.split("");

    for (let i = splitted.length - 1; i >= 0; i--) {
      arr.push(splitted[i]);
    }

    for (let i = 0; i < arr.length; i++) {
      arrDecoded.push(arr[i].charCodeAt() + 10);
    }

    // Add a dummy marker for empty strings to differentiate between [] and [""]
    return arrDecoded.length === 0 ? "EMPTY" : arrDecoded.join(",");
  }

  decodeSingle(str) {
    if (str === "" || str === "EMPTY") return "";

    let encoded = str.split(",");

    let original = [];
    for (let i = 0; i < encoded.length; i++) {
      original.push(encoded[i] - 10);
    }

    let arr2 = [];
    for (let i = 0; i < original.length; i++) {
      arr2.push(String.fromCharCode(original[i]));
    }

    let decoded = [];
    for (let i = arr2.length - 1; i >= 0; i--) {
      decoded.push(arr2[i]);
    }

    return decoded.join("");
  }
}
