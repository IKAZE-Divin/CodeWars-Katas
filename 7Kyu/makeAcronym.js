function toAcronym(inp){
  // ...
  let acronym="";
 let separate=inp.split(" ");
  for(let i=0; i<separate.length;i++){
    let loopThrough=separate[i].charAt(0).toUpperCase();
      acronym += loopThrough;
  }
  return acronym;
}