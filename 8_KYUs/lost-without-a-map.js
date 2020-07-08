// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

//ES6
const maps = (x) => x.map((i) => i * 2);

//Best Practice/Readable Code
function maps(x) {
  return x.map((i) => i * 2);
}
