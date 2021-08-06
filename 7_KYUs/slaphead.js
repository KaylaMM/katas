// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

// So for this head: "------/------" you shoud return:

// ["-------------", "Unicorn"]

// Final Answer
function bald(x) {
  let count = x.split("/").length - 1;
  const z = Array(x.length).fill("-").join("");
  if (count < 1) return [z, "Clean!"];
  if (count < 2) return [z, "Unicorn!"];
  if (count < 3) return [z, "Homer!"];
  if (count < 6) return [z, "Careless!"];
  return [z, "Hobo!"];
}

//Original Answer
function bald(x) {
  const arr = x.split("");
  const count = arr.reduce((a, v) => (v === "/" ? a + 1 : a), 0);
  const filtered = arr.filter((value, index, arr) => value != "/").join("");

  if (count === 0) {
    return [filtered, "Clean!"];
  } else if (count === 1) {
    return [filtered, "Unicorn!"];
  } else if (count === 2) {
    return [filtered, "Homer!"];
  } else if (count > 2 || count === 5) {
    return [filtered, "Careless!"];
  } else {
    return [filtered, "Hobo!"];
  }
}
