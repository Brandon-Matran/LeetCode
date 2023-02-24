var majorityElement = function(nums) {
    let d = {}
    let ans = 0
    for (let num of nums) {
        if (!(num in d)) {
            d[num] = 0
        } d[num] += 1
    }
   for (let key of Object.keys(d)) {
    if (d[key] > (nums.length / 2)) return key
};
}

nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))


// faster solution


var majorityElement = function(nums) {

    // Boyer-Moore Voting Algorithm

    let count = 0, candidate = 0

    for (let num of nums) {
        if (count == 0) {
            candidate = num
        }
        count += num == candidate ? 1 : -1
    }

    return candidate
};
