function getCount(objects) {
  let count = 0;
  let o;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y) {
      count++;
    }
  }
  return count;
}
