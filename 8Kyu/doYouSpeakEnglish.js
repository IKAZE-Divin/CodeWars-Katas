function spEng(sentence){
//write your code here
  const word="english";
  let separate=sentence.toLowerCase();
  if(separate.includes(word)){
    return true;
  }else{
    return false;
  }
}