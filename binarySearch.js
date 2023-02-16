const binarySearch = (numbers, target) => {
    let low = 0
    let high = numbers.length - 1
    while (low <= high) {
           const middle = Math.floor((low + high) / 2)
           if (target < numbers[middle]) {
            high = middle -1
           } else if (target > numbers[middle]) {
            low = middle + 1
           } else {
            return middle
           }
  };
  return -1
}

console.log(binarySearch([-1,0,3,5,9,12], 9))
