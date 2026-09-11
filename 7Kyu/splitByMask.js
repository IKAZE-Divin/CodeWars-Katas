function split(string,mask) {
  let result=[];
  let totalStrength= mask.reduce((sum, current) => sum + current, 0);
  if(string.length!== totalStrength){
    return null;
  }
  let stringIndex=0
  for(let i=0;i < mask.length;i++){
    let currentLength=mask[i];
    
    let chunk=string.slice(stringIndex, stringIndex + currentLength);
    result.push(chunk);
    
    stringIndex+=currentLength;
  }
  return result;
}

console.log(split("1234567890",[3,3,4]));


// function split(string,mask) {
//   let result=[];
//   let separate=string.split("");
//   let nums="";
//   if(separate.length!= mask.reduce((sum, current) => sum + current, 0)){
//     return null;
//   }
//   let stringIndex = 0;
//   for(let i=0;i < mask.length;i++){
//     for(let j=0; j < mask.length; j++){
//       nums+=separate[j];
//     }
//     result.push(nums);
//   }
//   return result;
// }

// console.log(split("1234567890",[3,3,4]));