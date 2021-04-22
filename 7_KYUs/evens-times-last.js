// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    const evenNums = numbers
      .filter((number) => number % 2 == 0)
      .reduce((a, b) => a + b, 0);
    return evenNums * numbers[numbers.length - 1];
  }
}
