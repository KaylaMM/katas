// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// check if number is negative
// create a new array of positive numbers
// .reduce the array of positive numbers for sum

function positiveSum(arr) {
  const filteredArr = arr.filter((number) => number > 0);

  if (filteredArr.length === 0) {
    return 0;
  }

  return filteredArr.reduce((a, b) => a + b);
}

// function positiveSum(numbers) {
//   let negatives = [];
//   let sum = 0;

//   for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//       negatives.push(numbers[i]);
//     } else {
//       sum += numbers[i];
//     }
//   }
//   return sum;
// }
