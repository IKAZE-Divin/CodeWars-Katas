function hamming(a, b) {
  var count = 0;

  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count += 1;
    }
  }

  return count;
}