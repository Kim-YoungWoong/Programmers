function solution(n, info) {
  let max = 0;
  let ryanInfo = Array.from({ length: 11 }, () => 0);

  const shot = (apScore, ryScore, cnt, idx, arr) => {
    if (n < cnt) return;
    if (idx > 10) {
      const diff = ryScore - apScore;
      if (max < diff) {
        arr[10] = n - cnt;
        max = diff;
        ryanInfo = arr;
      }
      return;
    }
    if (n > cnt) {
      const temp = [...arr];
      temp[10 - idx] = info[10 - idx] + 1;
      shot(apScore, ryScore + idx, cnt + info[10 - idx] + 1, idx + 1, temp);
    }
    if (info[10 - idx] > 0) {
      shot(apScore + idx, ryScore, cnt, idx + 1, arr);
    } else {
      shot(apScore, ryScore, cnt, idx + 1, arr);
    }
  };

  shot(0, 0, 0, 0, ryanInfo);
  return max > 0 ? ryanInfo : [-1];
}
