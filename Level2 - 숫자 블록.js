function solution(begin, end) {
  const answer = [];

  for (let i = begin; i <= end; i++) {
    answer.push(check(i));
  }
  if (begin === 1) answer[0] = 0;

  return answer;
}

function check(n) {
  for (let i = 2; i <= parseInt(n ** 0.5); i++) {
    if (n % i === 0 && parseInt(n / i) <= 10000000) {
      return parseInt(n / i);
    }
  }
  return 1;
}
