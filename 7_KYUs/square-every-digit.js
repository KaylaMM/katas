// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  const myFunc = (number) => Number(number);
  const intArr = Array.from(String(num), myFunc);

  let squaredA = [];

  for (let i = 0; i < intArr.length; i++) {
    squaredA.push(Math.pow(intArr[i], 2));
  }

  return Number(squaredA.join(""));
}

// Second Best Answer

function squareDigits(num) {
  var array = num
    .toString()
    .split("")
    .map(function (int) {
      var i = parseInt(int);
      return i * i;
    });

  return parseInt(array.join(""));
}

// Top Answer
function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}
