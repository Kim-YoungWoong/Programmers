function solution(A, B) {
  let answer = 0;
  A = A.sort((a, b) => b - a);
  B = B.sort((a, b) => a - b);

  for (const a of A) {
    const max_value = B.at(-1);
    if (a < max_value) {
      answer++;
      B.pop();
    }
  }

  return answer;
}
