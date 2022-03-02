function solution(n) {
  const n_cnt = Array.from(n.toString(2)).filter((v) => v === "1").length;

  for (let i = n + 1; ; i++) {
    const temp = Array.from(i.toString(2)).filter((v) => v === "1").length;
    if (temp === n_cnt) return i;
  }
}
