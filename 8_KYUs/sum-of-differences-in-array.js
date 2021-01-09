// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function sumOfDifferences(arr) {
  //   return (arr.length >= 1) ? (arr[0] - arr[1]) + (arr[1] - arr[2]) : 0

  let newArr = arr.map((x, i) => arr[i] - arr[i + 1]);
  console.log(newArr);
  let mapSum = newArr.map((x, i) => x + newArr[i + 1]);
  return mapSum;
}