var floodFill = function (image, sr, sc, color) {
  let start = image[sr][sc]; //a variable for start position of colored pixel
  if (start === color) {
    //base case
    return image;
  }
  let queue = [[sr, sc]]; //the root
  while (queue.length) {
    const [row, col] = queue.shift(); // find the next row and col and remove it from the queue, the values of row and col will be stored in row and col
    if (image[row][col] === start) {
      // this looks at the next pixel and checks if that pixel was the same value as the beginning pixel
      image[row][col] = color; //if it was, then assign the next pixel to the new value
      if (row - 1 >= 0)
        //go up because we are subtracting the row
        queue.push([row - 1, col]);
      if (row + 1 < image.length)
        //go down
        queue.push([row + 1, col]);
      if (col - 1 >= 0)
        //go left
        queue.push([row, col - 1]);

      if (col + 1 < image[0].length)
      console.log("IMAGE", image[0])
        //go right
        queue.push([row, col + 1]);
    }
  }
  return image;
};

//image[sr][sc] is the starting point
//sr represents the rows
//sc represents the columns
//only fill the pixels that have the same color as the starting point (i.e., have the same number)

image = [
  [0, 0, 0],
  [0, 0, 0],
];
sr = 1;
sc = 0;
color = 2;
console.log(floodFill(image, sr, sc, color));
