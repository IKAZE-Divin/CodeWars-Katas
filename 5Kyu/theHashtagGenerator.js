function generateHashtag (str) {
  if(str.trim().length===0) return false;
  
  let splitWords=str.trim().split(" ");
  splitWords=splitWords.map(word=> word.charAt(0).toUpperCase()+word.slice(1));
  splitWords.unshift("#");
  let joinWords=splitWords.join("");
  if(joinWords.length>140){
    return false;
  }else{
    return joinWords;
  }
}






// function generateHashtag (str) {
//   let splitWords=str.split(" ");
//   splitWords=splitWords.map(word=> word.charAt(0).toUpperCase()+word.slice(1));
//   splitWords.unshift("#");
//   let joinWords=splitWords.join("");
//   if(joinWords.length>140){
//     return false;
//   }else if(str===""||str===null){
//     return false;
//   }else{
//     return joinWords;
//   }
// }

console.log(generateHashtag(""));