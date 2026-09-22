function arrayDiff(a,b){
    // let newArray=[];
    // for(let i=0;i<a.length;i++){
    //     if(a[i]===b[i]){
    //         a.splice(i,1);
    //     }else{
    //         newArray.push(a[i]);
    //     }
    // }
    // return newArray;
    return a.filter(e => !b.includes(e));

}

console.log(arrayDiff([1,2,3,4,3],[3]));


// Implement a function that computes the difference between two lists. 
// The function should remove all occurrences of elements from the first list 
// (a) that are present in the second list 
// (b). The order of elements in the first list should be preserved in the result.

// Examples
// If a = [1, 2] and b = [1], the result should be [2].

// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

