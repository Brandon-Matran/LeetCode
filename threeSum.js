var threeSum = function (nums) {
  //create an array to store array of # that == 0
  let results = [];

  //sort the array because we want to determine that the array is not all positives
  newNums = nums.sort((a, b) => {
    return a - b;
  });

  //this loop represents the fixed number (i.e. the number we will compare the rest of the values to to sum up to 0)
  for (let i = 0; i < newNums.length; i++) {
    //checks for any positives BECAUSE if i as at any point positive then we cannot sum up to 0 and we break the loop
    if (newNums[i] > 0) {
      break;
    }

    //this logic checks for any duplicates because the prompt tells us that it does not want any duplicates
    if (newNums[i] === newNums[i - 1] && i > 0) {
      continue;
    }

    //initiliaze two pointers to iterate through the rest of the array
    let left = i + 1; //left will start one ahead of the fixed number and will iterate up once
    let right = newNums.length - 1; //right will start at the end of the array and decrement

    //while loop to cycle through all the values in the array
    while (left < right) {
      //find the sum of each iteration of the fixed number added to the left and right numbers
      const sum = newNums[i] + newNums[right] + newNums[left];

      if (sum === 0) {
        results.push([newNums[i], newNums[right], newNums[left]]);
        //left increments to check for dupes
        //right decrements to check for dupes
        left++;
        right--;
      } else if (sum > 0) {
        //right must decrement because it points to the highest values
        right--;
      } else {
        //this logic means that the sum is still < 0
        left++;
      }
    }
  }
  return results;
};

nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
