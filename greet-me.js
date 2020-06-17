// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// MY ANSWER
const greet = (name) => {
  let theName = name.toLowerCase();
  let correctName = theName.charAt(0).toUpperCase() + theName.slice(1);
  return `Hello ${correctName}!`;
};

// CLEANER ANSWER
var greet = function (name) {
  return (
    "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!"
  );
};
