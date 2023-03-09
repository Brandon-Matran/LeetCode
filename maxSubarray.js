const maxSubArray = nums => {
    let max = nums[0];
    let current = Math.max(max, 0);

    for (let i = 1; i < nums.length; i += 1) {
        current += nums[i];
        max = Math.max(max, current);
        current = Math.max(current, 0);
    }

    return max;
};


nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))
