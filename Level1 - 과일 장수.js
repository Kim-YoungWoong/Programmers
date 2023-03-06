function solution(k, m, score) {
  let answer = 0;
  let left = 0;
  let right = left + m;
  score = score.sort((a, b) => b - a);

  while (right <= score.length) {
    answer += Math.min(...score.slice(left, right)) * m;
    left = right;
    right = left + m;
  }

  return answer;
}
