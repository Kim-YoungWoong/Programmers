function solution(p, l) {
  let cnt = 0;
  const loc = p.map((v) => 0);
  loc[l] = 1;

  while (p.length > 0) {
    const max = p.reduce((acc, cur) => Math.max(acc, cur));

    if (max === p[0]) {
      p.shift();
      cnt++;
      if (loc.shift() === 1) return cnt;
    } else {
      p.push(p.shift());
      loc.push(loc.shift());
    }
  }
}
