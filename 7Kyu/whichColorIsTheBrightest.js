function brightest(colors) {
  let brightestColor = colors[0];
  let maxBrightness = 0;

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    
   
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    
    const currentBrightness = Math.max(r, g, b);

    if (currentBrightness > maxBrightness) {
      maxBrightness = currentBrightness;
      brightestColor = color;
    }
  }

  return brightestColor;
}


// function brightest(...colors){
//   let color="";
//   for(let i=0; i<colors.length;i++){
//     if(colors[i=0]){
//         colors[i=0]+=color;
//     }
//   }
//   return color;
// }

// console.log(brightest(["#FFFFFF", "#123456", "#000000"]));