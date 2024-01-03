// const isPrime = (n) => {
//   const checker = [];
//   for (let i = 1; i < n + 1; i++) {
//     checker.push(i);
//   }
//   console.log("CHECKER", checker)
//   let primeArray = []
//   for (let y = 0; y < checker.length; y ++) {
//     if (n % checker[y] == 0) {
//       primeArray.push(checker[y])
//     }
//   }
//   console.log(primeArray)
//   if (primeArray.length > 2) {
//     return false
//   }
//   return true
// };


const isPrime = (n) => {
  if (n < 2) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false
  }
  return true
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(25));
