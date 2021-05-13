// Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);

  function mapFunc(n) {
    if (n % 3 == 0 && n % 5 == 0) {
      return "FizzBuzz";
    } else if (n % 5 == 0) {
      return "Buzz";
    } else if (n % 3 == 0) {
      return "Fizz";
    } else {
      return n;
    }
  }

  return arr.map(mapFunc);
}
