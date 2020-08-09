// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

function orderedCount(text) {
  let letterCounter = [];
  let arr = text.split("").map((letter, i) => {
    return !letterCounter[letter]
      ? letterCounter[letter]
      : letterCounter.push(i);
  });
  return arr;
}

// create a new array
// create a counter
// identify if the letter exists in the parent array
// if not add it in a new array, push to parent
// if yes +1 to child array in parent
// retutn parent array
//==>use two maps?
