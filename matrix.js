var updateMatrix = function (mat) {
  let column = mat[0].length;
  let row = mat.length;
  let queue = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j, 0]);
      } else {
        mat[i][j] = Infinity;
      }
    }
  }
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    let [r, c, dist] = queue.shift();

    if (mat[r][c] > dist) {
      mat[r][c] = dist;
    }

    dir.forEach(function (d) {
      let next = [r + d[0], c + d[1], 1 + dist];
      if (next[0] > -1 && next[0] < row && next[1] > -1 && next[1] < column) {
        if(mat[next[0]][next[1]] === Infinity) {
            queue.push(next)
        }
      }
    });
  }
  return mat
};

mat = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];
console.log(updateMatrix(mat));
