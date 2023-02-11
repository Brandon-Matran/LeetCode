var isValid = function (s) {
  //create a dictionary that holds the values we will check against
  const d = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  // initialize a stack
  let stack = [];

  // loop over the given string

  for (let c of s) {
    if (c in d) {
      let value = stack.pop();

      if (d[c] !== value) {
        return false;
      }
    } else {
      stack.push(c);
      console.log(stack)

    }
  }

  if (stack.length === 0) {
    return true;
  }

  // pop the item in the stack to compare it to the value in the string
  // if the item in the stack is the same value as the item in the dict keep going until the stack is empty
  // if the stack is empty, return true
};

s = "[{()}]{]";

console.log(isValid(s));
