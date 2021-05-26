// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  let temporaryArray = [];
  for (var i = 0; i < arr.length; i += 2) {
    temporaryArray.push(arr[i]);
  }
  return temporaryArray;
}

//TOP ANSWER

function removeEveryOther(arr) {
  return arr.filter((elem, index) => index % 2 === 0);
}
