var climbStairs = function(n, memo={}) {
    let one = 1
    let two = 1
    for (let i = 0; i < n-1; i++) {
        let temp = one
        console.log("TEMP", temp)
        one = one + two

        console.log("ONE", one)
        two = temp

    }
    return one

};

n = 3
console.log(climbStairs(n));
