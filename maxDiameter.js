// function diameterOfBinaryTree(root) {
//     let max = 0

//      function maxDepth(root) {
//          if (root === null) return 0 // if our root(num) is null then there is no path. return 0/null
//          let left = maxDepth(root.left) // Assign the left  of tree to LEFT; this will be easier to call it instead of writing "maxDepth(root.left)" each time
//          let right = maxDepth(root.right) //Same above

//          max = Math.max(max, left + right) //if the path doesn't go through the root we just get the max of them
//          return Math.max(left, right) + 1 // the path goes through the root so we add 1(for the root)
//      }
//      //since we don't know if the path will go through the root or not we will have to get the max between(path that visits the root, or the path that doesn't go through the root.)
//      maxDepth(root)
//      return max
//  };

function diameterOfBinaryTree(root) {
  let max = 0;

  function maxDepth(root) {
    if (root === null) return 0; // if our root(num) is null then there is no path. return 0/null
    let left = maxDepth(root.left); // Assign the left  of tree to LEFT; this will be easier to call it instead of writing "maxDepth(root.left)" each time
    let right = maxDepth(root.right); //Same above

    console.log(
      "Current node value: ",
      root.val,
      " Left: ",
      left,
      " Right: ",
      right
    );

    max = Math.max(max, left + right); //if the path doesn't go through the root we just get the max of them
    // return max;
    console.log("Max value: ", max);
    return Math.max(left, right) + 1; // the path goes through the root so we add 1(for the root)
  }
  //since we don't know if the path will go through the root or not we will have to get the max between(path that visits the root, or the path that doesn't go through the root.)
  maxDepth(root);
  return max;
}

// Example binary tree
//          1
//         / \
//        2   3
//       / \
//      4   5

// Sample tree input
const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

console.log(diameterOfBinaryTree(root));
