function sides(literals, ...expressions) {
  const [a, p] = expressions;
  const root = Math.sqrt(p * p - 16 * a);
  const s1 = (p + root) / 4;
  const s2 = (p - root) / 4;
  return [s2, s1];
}

function main() {
  let s1 = +readLine();
  let s2 = +readLine();

  [s1, s2] = [s1, s2].sort();

  const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${
    2 * (s1 + s2)
  }.`;

  console.log(s1 === x ? s1 : -1);
  console.log(s2 === y ? s2 : -1);
}
