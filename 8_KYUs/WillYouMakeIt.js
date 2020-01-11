//FIRST ANSWER
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump <= mpg * fuelLeft){
      return true
  } else {
      return false
  }
  };

  //TERNARY (SHORTHAND) ANSWER - FINAL ANSWER ON CODE WARS
  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= (fuelLeft * mpg) ? true : false
  };