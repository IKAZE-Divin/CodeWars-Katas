function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let total=0;
  for(let i=0;i<classPoints.length;i++){
    total+=classPoints[i];
  }
  const average=(total+yourPoints)/(classPoints.length+1);
  if(average<yourPoints){
    return true;
  }else {
    return false;
  }
  
}