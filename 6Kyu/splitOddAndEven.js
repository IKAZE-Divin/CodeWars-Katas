function splitOddAndEven(n) {
  let nums=n.toString().split('');
  let array=[];
  let currentGroup=nums[0];
  for(let i=1; i<nums.length; i++){
    const prevIsEven=Number(nums[i-1])%2===0;
    const currIsEven=Number(nums[i])%2===0;
    if(prevIsEven===currIsEven){
      currentGroup+=nums[i];
    }else{
      array.push(Number(currentGroup));
      currentGroup=nums[i];
    }
  }
  array.push(Number(currentGroup));
  return array;
}