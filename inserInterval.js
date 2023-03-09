// var insert = function (intervals, newInterval) {
//   const result = [];
//   for (let i = 0; i < intervals.length; i++) {
//     let interval = intervals[i];
//     // find the overlap
//     if (
//       Math.max(interval[0], newInterval[0]) <=
//       Math.min(interval[1], newInterval[1])
//     ) {
//       newInterval = [
//         Math.min(interval[0], newInterval[0]),
//         Math.max(interval[1], newInterval[1]),
//       ];
//       continue;
//     }
//     if (interval[0] > newInterval[1]) {
//       result.push(newInterval, ...intervals.slice(i));
//       return result;
//     }
//     result.push(interval);
//   }
//   result.push(newInterval);
//   return result;
// };



// (intervals = [
//   [1, 2],
//   [3, 5],
//   [6, 7],
//   [8, 10],
//   [12, 16],
// ]),
//   (newInterval = [4, 8]);
// console.log(insert(intervals, newInterval));

var insert = function (intervals, newInterval) {
  const result = [];
  for (var i = 0; i < intervals.length; i++) {
    let interval = intervals[i];
    if (
      Math.max(interval[0], newInterval[0]) <=
      Math.min(interval[1], newInterval[1])
    ) {
      newInterval = [
        Math.min(interval[0], newInterval[0]),
        Math.max(interval[1], newInterval[1]),
      ];
      continue;
    }
    if (interval[0] > newInterval[1]) {
      result.push(newInterval, ...intervals.slice(i));
      return result;
    }
    result.push(interval);
  }
  result.push(newInterval);
  return result;
};

intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
console.log(insert(intervals, newInterval));
