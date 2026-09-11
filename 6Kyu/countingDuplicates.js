function duplicateCount(text){
  const NewText=text.toLowerCase().split("");
  let count=0;
  for(let i=0; i<NewText.length;i++){
    if(NewText.filter((x) => x === NewText[i]).length > 1){
      if(NewText.indexOf(NewText[i]) === i){
        count++;
      }
    }
  }
  return count;
}

console.log(duplicateCount("aabBcde"));

// function duplicateCount(text){
//   const NewText=text.split("");
//   let count=0;
//   for(let i=0; i<NewText.length;i++){
//     if(NewText.filter((x) => x === NewText[i]).length > 1){
//       count=NewText.filter((x) => x === NewText[i]).length;
//     }
//   }
//   return count;
// }

// console.log(duplicateCount("indivisibilities"));