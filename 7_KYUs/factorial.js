// Your task is to write function factorial.

const factorial = (n) => (n ? factorial(n - 1) * n : 1);

//With Recursion
function factorial(n) {
  if (n < 0) return -1;
  else if (n == 0) return 1;
  else {
    return n * factorial(n - 1);
  }
}
