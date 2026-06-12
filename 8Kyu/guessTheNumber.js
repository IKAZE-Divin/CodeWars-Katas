class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    var tries=0;
    if(this.lives<=0){
      throw new Error("You ran out of lives");
    }else if(this.number===n){
      return true;
    }else if(this.number!==n){
      return false,this.lives=this.lives-1;
    } 
    
  }
}