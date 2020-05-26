// Happy Holidays fellow Code Warriors!
// Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!

// Sort Santa's Reindeer
// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

function sortReindeer(reindeerNames) {
  let alphabeticalArr = reindeerNames.map((eachName) => {
    return eachName.split(" ");
  });

  alphabeticalArr.sort((a, b) => {
    if (a[1] === b[1]) {
      return 0;
    } else {
      return a[1] < b[1] ? -1 : 1;
    }
  });

  return alphabeticalArr.map((eachName) => {
    return eachName.join(" ");
  });
}
