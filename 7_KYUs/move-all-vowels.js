// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

// Vowels are (in this kata): a, e, i, o, u

// Note: all provided input strings are lowercase.

// Examples
// "day"    ==>  "dya"
// "apple"  ==>  "pplae"

function moveVowel(input) {
  const allVowels = ["a", "e", "i", "o", "u"];
  let vowelsArr = [];
  const inputArr = input.split("");
  const consonantsArr = inputArr.filter((letter) => {
    if (allVowels.includes(letter)) {
      vowelsArr.push(letter);
      return false;
    }
    return true;
  });
  return consonantsArr.concat(vowelsArr).join("");
}
