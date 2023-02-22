var lowestCommonAncestor = function(root, p, q) {
    let current = root

    while (current) {
        if (current.val < p.val && current.val < q.val) {
            current = current.right
        } else if (current.val > p.val && current.val > q.val) {
            current = current.left
    } else {
        return current
    }

};
};

console.log(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 0,4))
