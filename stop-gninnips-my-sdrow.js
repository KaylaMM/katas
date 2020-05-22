// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// MY ATTEMPT
// MISSING FOR LOOP IN FIRST ATTEMPT

// function spinWords(str){
//   let splitStr = str.split(' ')
//   // let reverseStr = splitStr.reverse()
//   // let joinStr = reverseStr.join('')
//   if(splitStr.length >= 5){
//     str.reverse()
//   }
//   return splitStr
// }

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// HELP FROM STACKOVERFLOW
function spinWords(string) {
  //splits string into words separated by a space
  let splitStr = string.split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    //if the word is more than 5 chars, reverse the word
    if (splitStr[i].length >= 5) {
      splitStr[i] = splitStr[i].split("").reverse().join("");
    }
  } //end for loop
  //join the modified array
  let joinStr = splitStr.join(" ");
  return joinStr;
}

//BEST PRACTICE AND CLEVER ANSWER ON CODEWARS
function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}
