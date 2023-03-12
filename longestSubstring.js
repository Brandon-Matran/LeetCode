var lengthOfLongestSubstring = function (s) {
  //initialize variable to keep track of dupes
  let left = 0;

  //initialize variable to keep current max length of substring
  let max = 0;

  //initialize a set to keep track of unique values in s
  let set = new Set();

  //for loop to iterate through all chars
  for (let i = 0; i < s.length; i++) {
    //check for dupes in the string
    while (set.has(s[i])) {
      set.delete(s[left]);
      left += 1;
    }
    set.add(s[i]);
    max = Math.max(max, i - left + 1);
  }

  return max;

  //if dupe in string, remove it from set

  //increment left variable to show start of new substring

  //otherwise add c to set

  //keep track of max length of substring

  //return max length
};

s = "pwwkew";
console.log(lengthOfLongestSubstring(s));
