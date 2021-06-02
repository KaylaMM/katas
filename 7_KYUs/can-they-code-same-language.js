// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];
// your function should return true.

function isSameLanguage(list) {
  for (var i = 1; i < list.length; i++) {
    if (list[i].language !== list[0].language) {
      return false;
    }
  }
  return true;
}

// TOP ANSWER
function isSameLanguage(list) {
  return list.every((e) => e.language === list[0].language);
}
