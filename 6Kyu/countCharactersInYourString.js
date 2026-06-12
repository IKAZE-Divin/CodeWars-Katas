function count(string) {
  // TODO
  const count={};
    for(var i=0; i<string.length; i++){
      var char=string[i];
      count[char] = (count[char] || 0) + 1;
    }
  
  return count;
}