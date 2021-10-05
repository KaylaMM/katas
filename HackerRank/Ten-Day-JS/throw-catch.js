function isPositive(a) {
  if (a > 0) {
    return "YES";
  }

  const throwZero = () => {
    a === 0;
    throw "Zero Error";
  };

  const throwNegative = () => {
    a < 0;
    throw "Negative Error";
  };

  try {
    throwZero();
  } catch (e) {
    console.log(e);
  }

  try {
    throwNegative();
  } catch (e) {
    console.log(e);
  }
}
