function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }

//recursion
var invertTree = function(root) {
    if (root === null) {
        return root
    }

    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.right)
    invertTree(root.left)

    return root
};



console.log(invertTree)


// bfs
var invertTree = function(root) {

    let queue = [root]

    while (queue.length) {
        let curr = queue.shift()
        if (curr !== null) {
            [curr.left, curr.right] = [curr.right, curr.left]
            queue.push(curr.left, curr.right)

        }
        console.log(queue)

    }
    return root
}
