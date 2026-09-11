function spinWords(string){
   let arrayString=string.split(" ");
//    let newString=[];
   let newString=arrayString.map(st=>st.length>=5? st.split("").reverse().join("") : st);
   return newString.join(" ");
    // for(let i=0; i<arrayString.length;i++){
    //     if(arrayString[i].length>=5){
    //         newString.push(arrayString[i].split("").reverse().join(""));
    //     } else{
    //         newString.push(arrayString[i]);
    //     }
    // }
    // return newString.join(" ");
}

console.log(spinWords("Hey fellow warriors"))

// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all words that have five or more letters reversed (just like the name of this kata). 
// Strings passed in will consist of only letters and spaces. Words will be separated by exactly one space. 
// There will be no leading or trailing spaces.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"