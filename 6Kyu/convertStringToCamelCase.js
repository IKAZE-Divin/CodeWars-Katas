function toCamelCase(str){
  let brockenDown=str.split(/[_-]+/);
  for(let i=0; i<brockenDown.length; i++){
    if(brockenDown[i]!=brockenDown[0]){
      brockenDown[i]=brockenDown[i].charAt(0).toUpperCase()+brockenDown[i].slice(1);
    }
  }
  let joining= brockenDown.join("");
  return joining;
}

console.log(toCamelCase("the_stealth_warrior"));

// function toCamelCase(str){
//   let brockenDown=str.split(/[_-]+/);
//   for(let i=0; i<brockenDown;i++){
//     if(brockenDown[i]!=brockenDown[0]){
//       brockenDown.word.charAt(0).toUpperCase();
//     }
//   }
//   let joining= brockenDown.join("");
//   return joining;
// }

// console.log(toCamelCase("the_stealth_warrior"));