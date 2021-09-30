function getSecondLargest(nums) {
  const max = nums.sort(function (a, b) {
    return b - a;
  });

  const removeMax = max.shift();

  console.log(max, "_+_+_+_");
  //     const max =  nums.reduce((a, b) => {
  //     return Math.max(a, b);
  // }, 0);
}
