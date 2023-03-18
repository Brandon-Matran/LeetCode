var evalRPN = function (tokens) {
  let stack = [];
  let ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => Math.floor(a / b),
    "*": (a, b) => a * b,
  };
  for (let t of tokens) {
    if (ops[t]) {
        let first = stack.pop()
        console.log("FIRST", first)
        let second = stack.pop()
        console.log("SECOND", second)
        stack.push(ops[t](second, first))
    } else {
      stack.push(Number(t));
    }
    console.log(stack);
  }
};

tokens = ["2", "1", "+", "3", "*"];
console.log(evalRPN(tokens));
