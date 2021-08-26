// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x) {
  let result = "";
  for (let char of x) {
    if (Number(char) <= 26) {
      result += String.fromCharCode(123 - char);
    } else {
      if (char === "27") result += "!";
      else if (char === "28") result += "?";
      else result += " ";
    }
  }
  return result;
}

//Favorite Answer
function switcher(x) {
  return x
    .map((a) => {
      if (a == 27) return "!";
      if (a == 28) return "?";
      if (a == 29) return " ";
      return String.fromCharCode(97 + 26 - parseInt(a));
    })
    .join("");
}
