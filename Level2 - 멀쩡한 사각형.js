function solution(w, h) {
  const answer = w * h;
  const cnt = w + h - gcd(w, h);
  return answer - cnt;
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
