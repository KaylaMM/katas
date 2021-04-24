// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
  if (numbers.length === 0) return 0;

  const lastInt = numbers[numbers.length - 1];
  const sum = numbers.reduce(
    (acc, number, index) => (index % 2 === 0 ? acc + number : acc),
    0
  );
  //  const evenNums = numbers.filter(number => number % 2 == 0).reduce((a, b) => a + b, 0)

  return sum * lastInt;
}

const evenLast = (arr) =>
  arr.filter((e, i) => i % 2 === 0).reduce((a, b) => a + b, 0) *
    arr[arr.length - 1] || 0;
