// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] --> 42 (i.e. sum of 23 and 19)
// [99, 2, 2, 23, 19]  --> 122 (i.e. sum of 99 and 23)
// Input sequence contains minimum two elements and every element is an integer.

//FIRST ANSWER
function largestPairSum(numbers) {
  let pairArr = numbers.sort((a, b) => a - b).slice(-2);
  return pairArr.reduce((a, b) => a + b);
}

//FINAL ANSWER
function largestPairSum(numbers) {
  let pairArr = numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
}
