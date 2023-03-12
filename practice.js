var majorityElement = function (nums) {
  let d = {};
  for (let num of nums) {
    if (!(num in d)) {
      d[num] = 0;
    }
    d[num] += 1;
  }
  console.log(d);

  for (let key of Object.keys(d)) {
    if (d[key] > (nums.length)/2) {
        return key
    }
}
}

nums = [6,6,6,7,7]
console.log(majorityElement(nums));
