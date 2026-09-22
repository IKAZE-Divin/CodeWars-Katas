function getDay(day, isLeap){
 const ordinaryYear=[
   {Month:"January",days:31},
   {Month:"February",days:28},
   {Month:"March",days:31},
   {Month:"April",days:30},
   {Month:"May",days:31},
   {Month:"June",days:30},
   {Month:"July",days:31},
   {Month:"August",days:31},
   {Month:"September",days:30},
   {Month:"October",days:31},
   {Month:"November",days:30},
   {Month:"December",days:31}
 ]
 if(isLeap===true){
    ordinaryYear[1].days=29;
 }
 let actualDay=[];
    // let totalDays=ordinaryYear.days.reduce((acc,curr)=>acc+curr,0);
    // let calculations=totalDays
    for(let i=0;i<ordinaryYear.length;i++){
        if(day>ordinaryYear[i].days){
        day=day-ordinaryYear[i].days;
        }else{
            actualDay.push(ordinaryYear[i].Month,day);
            break;
        }
    }
    return actualDay.join(", ");
}

console.log(getDay(60, true));

// What date corresponds to the nth day of the year?
// The answer depends on whether the year is a leap year or not.

// Write a function that will help you determine the date if you know the number of the day in the year, as well as whether the year is a leap year or not.
// The function accepts the day number and a boolean value isLeap as arguments, and returns the corresponding date of the year as a string "Month, day".
// Only valid combinations of a day number and isLeap will be tested.

// Examples:
// * With input `41, false` => return "February, 10"
// * With input `60, false` => return "March, 1"
// * With input `60, true` => return "February, 29"
// * With input `365, false` => return "December, 31"
// * With input `366, true` => return "December, 31"