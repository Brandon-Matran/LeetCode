var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let count = {};
  for (let c of s) {
    if (!(c in count)) {
      count[c] = 1;
    } else {
      count[c]++;
    }
  }
  for (let c of t) {
    if (count[c] === undefined) {
      return false;
    } else {
      count[c]--;
    }
  }
  console.log(count)
  for (let c in count) {
    if (count[c] !== 0) {
      return false;
    }
  }
  return true;
};

s = "anagram";
t = "nagaram";
console.log(isAnagram(s, t)); // false
