var characterReplacement = function (s, k) {
  let visited = {};
  let maxCharCount = 0;
  //initialize k
  let left = 0;
  let right = 0;
  //iterate through all the characters of s
  while (right < s.length) {
    const char = s[right];
    visited[char] = visited[char] ? visited[char] + 1 : 1;
    if (visited[char] > maxCharCount) {
      maxCharCount = visited[char];
    }
    if (right - left + 1 - maxCharCount > k) {
      visited[s[left]] -= 1;
      left++;
    }

    right++;
  }
  return right - left;
};

s = "AABABBA";
k = 2;
console.log(characterReplacement(s, k));
