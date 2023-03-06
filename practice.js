var search = function(nums, target) {
  let lo = 0
  let hi = nums.length - 1
  while (lo <= hi) {
    let middle = Math.floor((lo + hi) / 2)
    if (target === nums[middle]) {
      return middle
    } if (target < nums[middle] ) {
      hi = middle - 1
    } if (target > nums[middle]) {
      lo = middle + 1
    }
  }
  return -1


}


nums = [-1,0,3,5,9,12], target = 12


console.log(search(nums,target))
