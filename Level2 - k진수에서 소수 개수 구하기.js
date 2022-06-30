function solution(n, k) {
  let answer = 0;
  let transNum = n.toString(k).split("0").map(v => parseInt(v)).filter(v => v === Number(v));
  transNum.forEach(v => {
    if (isPrime(v)) answer++;
  })

  return answer;
}

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= parseInt(n ** 0.5); i++) {
    if (n % i === 0) return false;
  }
  return true;
}