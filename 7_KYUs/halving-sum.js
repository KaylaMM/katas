// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
  let sum = n;
  while (n > 1) {
    sum += Math.floor(n / 2);
    n -= Math.ceil(n / 2);
  }
  return sum;
}

//BEST PRACTICE
function halvingSum(n) {
  var sum = 0;
  while (n > 0) {
    sum += n;
    n = Math.floor(n / 2);
  }
  return sum;
}
