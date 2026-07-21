function solution(number){
  let sum=0;
  if(number<0){
    return 0;
  }
  for(let i=0; i<number; i++){
    if(i%3===0 || i%5===0){
      sum+=i;
    }
  }
  return sum;
}

// function solution(number){
//   let count=1;
//   let sum=0;
//   if(number<0){
//     return 0;
//   }
//   for(let i=0; i<=number; i++){
//     if(number%3===0 && number%5===0){
//       count+=sum;
//     }else if(number%3===0){
//       count+=sum;
//     } else if(number%5===0){
//       count+=sum;
//     }
//   }
//   return count;
// }