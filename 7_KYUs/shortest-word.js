// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  var shortestWord = s.split(" ").sort(function (a, b) {
    return a.length - b.length;
  });
  return shortestWord[0].length;
}
