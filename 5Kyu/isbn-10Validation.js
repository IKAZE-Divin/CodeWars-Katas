function validISBN10(isbn) {
  // 1. Force convert to string and check if length is exactly 10
  const strIsbn = String(isbn);
  if (strIsbn.length !== 10) return false;

  // 2. Convert to an array of characters
  const splitIsbn = Array.from(strIsbn);

  // 3. Validate characters: digits 1-9 must be numbers; digit 10 can be 'X'
  for (let i = 0; i < 9; i++) {
    if (isNaN(splitIsbn[i]) || splitIsbn[i] === ' ') return false;
  }

  // 4. Handle the special 'X' character at the 10th position
  const lastChar = splitIsbn[9];
  if (lastChar === 'X' || lastChar === 'x') {
    splitIsbn[9] = 10;
  } else if (isNaN(lastChar) || lastChar === ' ') {
    return false;
  } else {
    splitIsbn[9] = Number(lastChar);
  }

  // 5. Calculate the weighted checksum
  const sum = splitIsbn.reduce((acc, curr, index) => {
    return acc + Number(curr) * (10 - index);
  }, 0);

  // 6. Return validation result
  return sum % 11 === 0;
}




















// function validISBN10(isbn) {
//     // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
//   const splitIsbn= Array.from(String(isbn), String);

//   splitIsbn[9] = splitIsbn[9] === 'X' ? 10 : Number(splitIsbn[9]);
//   const sum = splitIsbn.reduce((acc, curr, index) => {
//     return acc + Number(curr) * (10 - index);
//   }, 0);
//   return sum % 11 === 0;
// }

// console.log(validISBN10("048665088XZ"));





// if(splitIsbn[9]==='X'){
//     splitIsbn[9]=10;
// }else if(splitIsbn.length<10){
//     return false;
// }

// const mainValue=splitIsbn.reduce((acc, curr, index) => {
//     return acc + Number(curr) * (10 - index);
//   }, 0);
// let mainValue=0;
//   for(let i=0; i < splitIsbn.length; i++){
//     let calculation=Number(splitIsbn)*splitIsbn[i];
//     mainValue+=calculation;
//   }
//    return mainValue%11===0;