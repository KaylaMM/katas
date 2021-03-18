// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

// Vowels are (in this kata): a, e, i, o, u

// Note: all provided input strings are lowercase.

// Examples
// "day"    ==>  "dya"
// "apple"  ==>  "pplae"

function moveVowel(input) {
  let inputArr = input.split("");
  return inputArr
    .map((character) => {
      if (/[aeiouyAEIOUY]/.test(character)) {
        character = "";
      } else {
        return character;
      }
    })
    .join("");
}