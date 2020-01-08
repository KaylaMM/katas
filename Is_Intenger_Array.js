//2 out of 3 test passed
//INCOMPLETE
function isIntArray(arr) {
    if (arr.length === 0){
      return true;
      }
    for (i=0; i< arr.length; i++){
     if (arr[i] % 1 === 0){
      return true;
      } else {
      return false;
      }
    }