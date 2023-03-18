var levelOrder = function (root) {
  //initialize an array to hold the results
  let result = [];
  //initialize a variable to track the level of the tree we are traversing
  let level = 0;

  //create a helper function so we can recursively traverse th tree, pass in the root and level
  function traversal(root, level) {
    //root because we start at the beginning of tree, the level to keep track of where we are in the tree
    if (!root) {
      return;
    } else {
      //we want to continue to add to the array as we traverse the tree
      if (level >= result.length) {
        //we want to add an empty array each time we are a diff level of the tree
        result[level] = [];

        //push the val of the current node into the array
        result[level].push(root.val);
        //continue to traverse the tree
        traversal(root.left, level + 1);
        traversal(root.right, level  + 1);
      }
    }
  }
  traversal(root, level);
  return result;
};

root = [3, 9, 20, null, null, 15, 7];
console.log(levelOrder(root));
