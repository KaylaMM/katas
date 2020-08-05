// You must implement a function maxDiff that return the difference between the biggest and the smallest value in a list(lst) received as parameter.

// The list(lst) contains integers, that means it may contain some negative numbers.

// If the list is empty or contains a single element, return 0.

// The list(lst) is not sorted.

// maxDiff([1, 2, 3, 4]); //return 3, because 4 - 1 == 3
// maxDiff([1, 2, 3, -4]); //return 7, because 3 - (-4) == 7
// Have fun!

//First Attempt
function maxDiff(list) {
  let sortArr = list.sort(function (a, b) {
    return a - b;
  });
  if (list.length <= 1) {
    return 0;
  } else {
    return sortArr[sortArr.length - 1] - sortArr[0];
  }
}

//Final Answer
const maxDiff = (list) => {
  return list.length > 1 ? Math.max(...list) - Math.min(...list) : 0;
};
