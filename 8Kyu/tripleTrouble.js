function tripleTrouble(one, two, three){
  //Solution
  if(one.length!==two.length || two.length !== three.length){
    return "Unequal string length";
  }else{
    var string="";
    for(var i=0; i<one.length;i++){
        string+= one[i]+two[i]+three[i]
    }
  }
  return string;
 }