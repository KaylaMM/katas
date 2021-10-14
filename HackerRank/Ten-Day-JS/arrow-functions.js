const modifyArray = (nums) => {
  return nums.map((num) => {
    return num % 2 === 0 ? num * 2 : num * 3;
  });
};
