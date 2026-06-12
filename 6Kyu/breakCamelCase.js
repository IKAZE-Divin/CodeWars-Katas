function solution(string) {
  
  var newString = string.split("");
  var modified = [];
  
  newString.map(function changed(char, i) {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      modified.push(" " + char);
    } else {
      modified.push(char);
    }
  });
  
  return modified.join("");
}