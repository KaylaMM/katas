// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

//MY ANSWER
function abbrevName(name) {
  const initials = name.match(/\b(\w)/g);
  return initials[0].toUpperCase() + "." + initials[1].toUpperCase();
}

//TOP ANSWER
function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
