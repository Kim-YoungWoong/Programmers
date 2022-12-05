function solution(n, s) {
  const answer = [];
  let remainder = s % n;
  for (let i = 0; i < n; i++) {
    answer.push(parseInt(s / n));
  }

  for (let i = 0; i < remainder; i++) {
    answer[i]++;
  }

  return answer.every((v) => v !== 0) ? answer.sort((a, b) => a - b) : [-1];
}
