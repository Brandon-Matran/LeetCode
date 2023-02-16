var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let d1 = {}
    let d2 = {}
    for (let i = 0; i < s.length; i++) {
        if (s[i] in d1) {
            d1[s[i]] += 1

        } else {
            d1[s[i]] = 1

        }
        if (t[i] in d2) {
            d2[t[i]] += 1
        } else {
            d2[t[i]] = 1
        }

    }

    for (let key in d1) {
        if (d1[key] !== d2[key]) {
            return false;
        }
    }
    // check that both dictionaries have the same keys
    return Object.keys(d1).length === Object.keys(d2).length;
}

s = "cot"
t = "tac"
console.log(isAnagram(s, t)) // false
