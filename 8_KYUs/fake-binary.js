// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Longhand Version
// function fakeBin(x){
//   let arr = x.split('')
//   let finalStr = ''
//   for ( let i = 0; i < arr.length; i++) {
//         let elem = arr[i]
//       if ( elem < 5) {
//             elem = 0
//            finalStr += elem
//       } else {
//            elem = 1
//            finalStr += elem
//       }
//   }
//     return finalStr
// }

//First Attempt
// return x
//     .split(" ")
//     .map( letter => if(letter <= 5) {
// return "0"} else {
//   return "1"
// })
//     .join(" ");
// }

//Final Answer
const fakeBin = (x) => {
  return x
    .split("")
    .map((letter) => {
      return letter < 5 ? "0" : "1";
    })
    .join("");
};
