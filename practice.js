var canConstruct = function (ransomNote, magazine) {
  let count = {};
  let counter = 0;
  for (c of magazine) {
    if (!(c in count)) {
      count[c] = 0;
    }
    count[c] += 1;
  }

  for (c of ransomNote) {
    console.log(c);
    if (!(count[c])) {
      return false;
    }
      count[c]--;

  }
  return true
}


ransomNote = "aa", magazine = "ab"
console.log(canConstruct(ransomNote, magazine));

console.log(0==false )
