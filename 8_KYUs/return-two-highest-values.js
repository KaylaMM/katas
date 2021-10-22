// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []
function twoHighest(arr) {
  if (!arr.length) return [];
  const max1 = Math.max(...arr);
  let max2;
  const filteredArr = arr.filter((el) => el !== max1);
  if (filteredArr.length) {
    max2 = Math.max(...filteredArr);
  }
  return max2 ? [max1, max2] : [max1];
}