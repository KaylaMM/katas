function expressionMatter(a, b, c) {
    let highestValue = [];
      highestValue.push(a * b * c)
      highestValue.push(a + b * c)
      highestValue.push((a + b) * c)
      highestValue.push(a + b + c)
      highestValue.push(a * (b + c))
    console.log(highestValue)
    return Math.max(...highestValue)
    };
    
    //TEST
    expressionMatter(1,1,1)