// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let odds = A.filter(function (x) {
    return x % 2 === 1;
  });
  console.log(odds);
}
