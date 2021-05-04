// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

// ATTEMPT #1
// function calculate(str) {
//   const splitArr = str.split("");
//   const numArr = splitArr.filter(Number).map(Number);

//   if (splitArr.includes("plus")) {
//     str.replace("plus", "+");
//   } else {
//     str.replace("minus", "-");
//   }
// }

// Final Answer
function calculate(str) {
  return eval(
    str.replace(/(plus)/gi, "+").replace(/(minus)/gi, "-")
  ).toString();
}
