var groupAnagrams = function(strs) {
    //create a result arr
    const result = []
    //put each word into a dictionary for optimization
    let d = {}
    //iterate over all the words in the list
    //split each word, then sort it by order of letter, then finally join them back together
    for (let i=0; i < strs.length; i++) {
      let str = strs[i]
      let sortedStr = str.split("").sort().join('')
      if (d[sortedStr] === undefined) {
        d[sortedStr] = [str]
      } else {
        d[sortedStr].push(str)
      }
    }
    for (let v of Object.values(d)) {
      result.push(v)
    }
    return result
};

strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))
