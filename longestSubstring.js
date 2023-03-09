var lengthOfLongestSubstring = function (s) {
    let set = new Set();

    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            set.delete(s[i]);
        }
            set.add(s[i]);


    }
    return set.size;
};


s = "pwwkew"
console.log(lengthOfLongestSubstring(s));
