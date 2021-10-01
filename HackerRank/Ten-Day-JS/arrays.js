function getSecondLargest(nums) {
  const sortedArray = nums.sort((a, b) => {
    return b - a;
  });

  const max = sortedArray[0];

  return sortedArray.find((num) => num < max);
}
