var longestPalindrome = function (s) {
    const set = new Set();
    let counter = 0;
    for (c of s) {
        if (set.has(c)){
            counter += 2
            set.delete(c)

        }
        else{
        set.add(c)
    }
}

return counter + (set.size > 0 ? 1 : 0)

}
s = "abccccdd"
console.log(longestPalindrome(s));
