// A simple kata, my first.
// simply tranform an array into a string, like so:

//   transform([4, -56, true, "box"]) => "4-56truebox"

//Original Answer
function transform(array) {
  return array.map((e) => e.toString()).join("");
}

//Top Answer
function transform(array) {
  return array.map(String).join("");
}
