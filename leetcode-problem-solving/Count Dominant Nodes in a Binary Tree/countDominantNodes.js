/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

var countDominantNodes = function (root) {
  let result = helper(root);
  return result.count;
};

function helper(root) {
  if (root === null) {
    return {
      count: 0,
      max: -Infinity,
    };
  }

  const leftResult = helper(root.left);
  const rightResult = helper(root.right);

  const subTreeMax = Math.max(leftResult.max, rightResult.max, root.val);

  const currentDom = root.val === subTreeMax ? 1 : 0;

  const totalCount = leftResult.count + rightResult.count + currentDom;

  return {
    count: totalCount,
    max: subTreeMax,
  };
}

// Converts LeetCode array format into a binary tree
function buildTree(values) {
  if (!values.length || values[0] === null) {
    return null;
  }

  const root = new TreeNode(values[0]);
  const queue = [root];

  let i = 1;

  while (queue.length > 0 && i < values.length) {
    const current = queue.shift();

    if (values[i] !== null && values[i] !== undefined) {
      current.left = new TreeNode(values[i]);
      queue.push(current.left);
    }

    i++;

    if (i < values.length && values[i] !== null && values[i] !== undefined) {
      current.right = new TreeNode(values[i]);
      queue.push(current.right);
    }

    i++;
  }

  return root;
}

// ---------------- TEST CASES ----------------
// console.log("-----------------");
const root1 = buildTree([5, 3, 8, 2, 4, 7, 1]);
console.log("Test 1:", countDominantNodes(root1));

console.log("----------------");
