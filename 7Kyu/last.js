function last(...args) {
  const lastArg = args.at(-1);

  if (args.length === 1 && (Array.isArray(lastArg) || typeof lastArg === 'string')) {
    return lastArg.at(-1);
  }

  return lastArg;
}

// function last(...value) {
//   var container;
//   if(typeof value === "string"){
//     container=value.split("");
//     let last=container.length-1;
//     return last;
//   } else if(typeof value === "object"){
//     container=value.length-1;
//     return container;
//   }
// }
