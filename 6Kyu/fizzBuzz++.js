function fizzbuzzPlusPlus(numbers, words) {
  let array = [];
  let limit = numbers.length === 2 ? 15 : 30; 

  for (let i = 1; i <= limit; i++) {
    let outputString = "";

    for (let j = 0; j < numbers.length; j++) {
      if (i % numbers[j] === 0) {
        outputString += words[j];
      }
    }

    if (outputString !== "") {
      array.push(outputString);
    } else {
      array.push(i);
    }
  }
  
  return array;
}
