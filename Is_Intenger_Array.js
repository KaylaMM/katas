//2 out of 3 test passed
//FIRST ATTEMPT
// function isIntArray(arr) {
//     if (arr.length === 0){
//       return true;
//       }
//     for (i=0; i< arr.length; i++){
//      if (arr[i] % 1 === 0){
//       return true;
//       } else {
//       return false;
//       }
//     }
// };


//NULL ERROR APPEARING IN ATTEMPT
// function isIntArray(arr) {
//     console.log(arr)
//       if (arr.length === 0){
//         return true;
//         }
//       return arr.every(x=> Number(x) === x && x % 1 === 0 )
//   };


function isIntArray(arr) {
    if (!arr){
      return false
    } else if (arr.length === 0){
      return true;
    }
      return arr.every(x=> Number(x) === x && x % 1 === 0)
  };
