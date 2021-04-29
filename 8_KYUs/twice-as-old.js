// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (dadYearsOld >= sonYearsOld * 2) {
    return dadYearsOld - sonYearsOld * 2;
  } else {
    return sonYearsOld * 2 - dadYearsOld;
  }
}

// Final Answer

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return dadYearsOld >= sonYearsOld * 2
    ? dadYearsOld - sonYearsOld * 2
    : sonYearsOld * 2 - dadYearsOld;
}

// Top Answer

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
