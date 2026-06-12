function findSmallestInt(arr) {
    var minValue=arr[0];
  for(var i=0; i<arr.length; i++){
    if(arr[i]<minValue){
      minValue=arr[i]
    }
  }
    return minValue;
}

console.log(findSmallestInt([78,56,232,12,8]));