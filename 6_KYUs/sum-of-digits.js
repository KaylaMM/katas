// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

//EXAMPLES:

// 16-- > 1 + 6 = 7;
// 942-- > 9 + 4 + 2 = 15-- > 1 + 5 = 6;
// 132189-- > 1 + 3 + 2 + 1 + 8 + 9 = 24-- > 2 + 4 = 6;
// 493193-- > 4 + 9 + 3 + 1 + 9 + 3 = 29-- > 2 + 9 = 11-- > 1 + 1 = 2;

//FIRST ANSWER
function digital_root(n) {
  let arr = [...(n + "")].map(Number);
  let solution = arr.reduce((a, b) => a + b);
  if (arr.length > 2) {
    return [...(solution + "")].map(Number).reduce((a, b) => a + b);
  } else {
    return arr.reduce((a, b) => a + b);
  }
}

//FINAL ANSWER

function digital_root(n) {
  const reducer = (num) => [...(num + "")].map(Number).reduce((a, b) => a + b);
  let solution = reducer(n);

  while (solution.toString().length > 1) {
    solution = reducer(solution);
  }
  return solution;
}
