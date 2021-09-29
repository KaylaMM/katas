function getLetter(s) {
  const target = s[0];
  const first = "aeiou";
  const second = "bcdfg";
  const third = "hkjlm";
  const fourth = "npqrstvwxyz";
  const options = [first, second, third, fourth];
  const targetOption = options.find((option) => option.includes(target));
  const result = options.indexOf(targetOption);

  switch (result) {
    case 0:
      return "A";
      break;
    case 1:
      return "B";
      break;
    case 2:
      return "C";
      break;
    case 3:
      return "D";
      break;
  }
}
