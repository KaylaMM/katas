// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

// My Answer
function bump(x) {
  let bumpCount = 0;
  const count = x.split("").map((n) => {
    if (n === "n") {
      bumpCount++;
    }
  });

  return bumpCount > 15 ? "Car Dead" : "Woohoo!";
}

//Top Answer
const bump = (x) => (x.split("n").length > 16 ? "Car Dead" : "Woohoo!");
