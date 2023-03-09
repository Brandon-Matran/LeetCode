// // How long is it going to take for traffic to halt
// // 0. an obstacle in the road that cannot be changed
// // 1. a vehicle in motion
// // 2. a vehicle no longer in motion is stopped, 2's will stop all 1's and turn them into 2's
// // given this matrix, how many times does it need to be iterated through for all the ones to be 2
function trafficJam(grid) {
  let newGrid = grid;
  let counter = 0;
  //create a row
  let row = grid.length;
  //create a column
  let column = grid[0].length;
  //create a queue to check coordinates
  let queue = [];

  //create a for loop to iterate over all the rows and columns
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 0 || grid[i][j] === 2) {
        continue;
      } else if (grid[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }

  // check each cell to see if it is a 0, 1, or 2
  //if 0 then leave it as is
  //if 1 then store those coordinates in an array

  //create a way to scan left, right, up and down
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    let cell = queue.shift();
    console.log(cell);

    dir.forEach(function (d) {
      let next = [cell[0] + d[0], cell[1] + d[1]];
      if (next[0] >= 0 && next[0] < row && next[1] >= 0 && next[1] < column) {
        if (grid[next[0]][next[1]] === 2) {
          grid[cell[0]][cell[1]] = 2;
        }
      }
    });
  }
  console.log(counter);

  return grid;
}

//iterate through the queue and scan in each direction to check if the number next to the cell is a 2
//create a condition to only check within bounds
//compare the current cell to the next cell

//return new grid

let grid = [
  [2, 2, 1, 1],
  [2, 1, 0, 1],
  [0, 2, 0, 2],
  [0, 1, 2, 1],
];

console.log(trafficJam(grid));

// [ [ 2, 2, 2, 2 ],
// [ 2, 2, 0, 2 ],
// [ 0, 2, 0, 2 ],
// [ 0, 2, 2, 2 ] ]
