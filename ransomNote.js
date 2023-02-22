var canConstruct = function(ransomNote, magazine) {
    let d1 = {}
    for (let letter of magazine) {
        if (!(d1[letter])) {
            d1[letter] = 0
        }
        d1[letter] += 1
    }
    for (let letter of ransomNote) {
        if (!(d1[letter])) {
            return false
        }
        d1[letter] -= 1
    }
    return true

};
