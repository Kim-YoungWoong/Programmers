function solution(n, words) {
  let idx = 0;

  for (let i = 1; i < words.length; i++) {
    if (words.indexOf(words[i]) !== i || words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      idx = i;
      break;
    }
  }

  return idx != 0 ? [(idx % n) + 1, parseInt(idx / n) + 1] : [0, 0];
}
