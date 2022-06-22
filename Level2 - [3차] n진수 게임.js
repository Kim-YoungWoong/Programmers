function solution(n, t, m, p) {
  let str = "";
  let answer = "";
  let i = 0;
  while (str.length < t * m) {
    str += i.toString(n);
    i++;
  }
  str.length > t * m ? str = str.slice(0, -1) : str;

  for (let i = 0; i < t * m; i++) {
    if (i % m === p - 1) answer += str[i];
  }

  return answer.toUpperCase();
}