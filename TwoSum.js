const pairSum = (numbers, targetSum) => {
  //create a dictionary to house the indexes
  let d = {};
  // create a loop to iterate over indexes of the numbers
  for (const [index, element] of numbers.entries()) {
    // create a needed_value that looks for a number in the dictionary
    let needed_value = targetSum - element;

    // find if the needed value is in the dictionary return that index along with the index of the current value
    if (needed_value in d) {
      return [d[needed_value], index];
    } else {
      // else, add that value to the dictionary
      d[element] = index;
      console.log(d);
    }
  }

  return d;
};

numbers = [1, 2, 3, 4, 5];

console.log(pairSum(numbers, 6));
