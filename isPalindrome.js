var isPalindrome = function(s) {
    const newS = s.replace(/[\W|_]/g, '').toLowerCase(); //regex to remove all nonalphanumeric characters [] to indicate a char set, \W to remove any char not a letter, digit, underscore, _ to remove underscore
    left = 0 //create a pointer that iterates from the left side of th strin
    right = newS.length - 1 // create a pointer that iterates from the right side of the string
    while (left < right) { // a while loop to iterate until both pointers meet in the middle
        if (newS[left] !== newS[right]) { // if conditon that returns false the moment two characters don't match
            return false;
        } else {
            left ++ // continue to incremenet left
            right -- // continue to decremenet right until both pointers meet in the middle
        }
    }
    return true

};


console.log(isPalindrome("A man, a plan, a canal: Panama"))
