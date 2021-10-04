function reverseString(s) {
  if (typeof s === "number") {
    console.log("s.split is not a function");
    console.log(s);
  } else {
    console.log(s.split("").reverse().join(""));
  }
}
