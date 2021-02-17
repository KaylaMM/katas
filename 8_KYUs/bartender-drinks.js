// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param) {
  let table = [
    { input: "Jabroni", output: "Patron Tequila" },
    { input: "School Counselor", output: "Anything with Alcohol" },
    { input: "Programmer", output: "Hipster Craft Beer" },
    { input: "Bike Gang Member", output: "Moonshine" },
    { input: "Politician", output: "Your tax dollars" },
    { input: "Rapper", output: "Cristal" },
  ];

  let caps = param.toUpperCase();

  return table.map((caps, input) => {
    return table.output ? table.input === caps : "Beer";
  });

  return map;
}
