function solution(s) {
  let minLen = s.length;
  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let str = "";
    let cnt = 1;
    for (let j = 0; j < s.length; j += i) {
      let front = s.substr(j, i);
      let back = s.substr(j + i, i);
      if (front === back) cnt++;
      else {
        str = cnt > 1 ? str + cnt + front : str + front;
        cnt = 1;
      }
    }
    minLen = Math.min(minLen, str.length);
  }
  return minLen;
}
