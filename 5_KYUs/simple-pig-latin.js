// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  return str
    .split(" ")
    .map((str) => {
      return /[a-zA-Z]+/.test(str)
        ? str.substr(1) + str.substr(0, 1) + "ay"
        : str;
    })
    .join(" ");
}
