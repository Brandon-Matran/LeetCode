// var containsDuplicate = function (nums) {
//   var newSet = new Set(nums);
//   return newSet.size !== nums.length;
// };

// nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// console.log(containsDuplicate(nums));

///
var containsDuplicate = function (nums) {
  let d = {};
  for (var i = 0; i < nums.length; i++) {
    if (d[nums[i]]) {
      return true;
    } else {
      d[nums[i]] = true;
    }
  }
  return false;
};

nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums));
