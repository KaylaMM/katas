// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

function evenOrOdd(str) {
  const strToNum = str.split("").map(Number);
  const evenArr = strToNum
    .filter((evenNum) => evenNum % 2 === 0)
    .reduce((a, c) => a + c);
  const oddArr = strToNum
    .filter((oddNum) => oddNum % 2 !== 0)
    .reduce((a, c) => a + c);

  return evenArr > oddArr
    ? "Even is greater than Odd"
    : evenArr < oddArr
    ? "Odd is greater than Even"
    : "Even and Odd are the same";
}
