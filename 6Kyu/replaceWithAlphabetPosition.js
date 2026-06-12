function alphabetPosition(text) {
  return text.toLowerCase()
  .replace(/[^a-z]/g, '')
  .split('')
  .map(char => char.charCodeAt(0) - 96)
  .join(' ');
}

console.log(alphabetPosition("I woke up in the morning and I felt so bad"));
