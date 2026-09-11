function narcissistic(value){
    // Code me to return true or false
    const digits = Array.from(String(value), Number);
    const n=digits.length;

    let sum = digits.reduce((curr,acc)=> curr + acc**n, 0);

    if(sum!==value){
        return false;
    }else{
        return true;
    }
}

console.log(narcissistic(487));

// function narcissistic(value) {
//   const digits= Array.from(String(value),Number);
//   const n= digits.length;
//   const sum= digits.reduce((acc,digit) => acc + Math.pow(digit,n),0);
//   return sum === value;
// }
