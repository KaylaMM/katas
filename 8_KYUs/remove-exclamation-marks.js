// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = (s) => {
  return s
    .split("")
    .filter((exclamation) => exclamation != "!")
    .join("");
};
