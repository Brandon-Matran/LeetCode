var rob = function (nums) {
  if (nums.length === 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0];
  }

  const house = []; // new array to hold the max profit per each house
  house[0] = nums[0]; // start at the first house
  house[1] = Math.max(nums[0], nums[1]); //find the max between the first and second house
  for (let i = 2; i < nums.length; i++) { //start at index of 2 since we've accounted for house[0] and house[1]

    house[i] = Math.max(nums[i] + house[i - 2], house[i - 1]); //starting at nums[i] (which is the possible profit next) we can only rob from the house before the previous and compare it to the house prior, we choose the max
  }
 return house[nums.length - 1];
};

nums = [ 1, 3, 4, 4, 3, 3, 7, 2, 3, 4, 5, 1 ]
console.log(rob(nums));
