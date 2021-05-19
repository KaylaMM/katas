let obj1 = //first file
let obj2 = //second file

const arr1 = Object.keys(obj1)
const arr2 = Object.keys(obj2)
const duplicates = arr1.filter(ele => arr2.includes(ele))

console.log(duplicates)