function solution(numbers) {
  const answer = numbers.map((v) => v.toString()).sort((a, b) => b + a - (a + b));

  return answer[0] === "0" ? "0" : answer.join("");
}
