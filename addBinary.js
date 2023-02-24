let addBinary = (a, b) => {
    // Truth Table
    // 1st + 2nd + carry = sum, new carry, decimal sum
    //   0 +  0  + 0 = 0, 0 (0)
    //   0 +  0  + 1 = 1, 0 (1)
    //   0 +  1  + 1 = 0, 1 (2)
    //   1 +  1  + 1 = 1, 1 (3)

    let carry = 0;
    let result = '';

    let len1 = a.length - 1;
    let len2 = b.length - 1;

    for (; len1 >= 0 || len2 >= 0 || carry > 0; len1--, len2--) {
      let sum = (+a[len1] || 0) + (+b[len2] || 0) + carry;
      if (sum > 1) {
        sum = sum % 2;
        carry = 1;
      } else {
        carry = 0;
      }
      result = `${sum}${result}`;
    }
    return result;
  };



 a = "11", b = "1"
 console.log(addBinary(a, b));


 //faster solution

 var addBinary = function(a, b) {
    return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2);
}

// https://leetcode.com/problems/add-binary/solutions/1017596/detail-explanation-easy-single-line-97-faster/?orderBy=most_votes&languageTags=javascript
