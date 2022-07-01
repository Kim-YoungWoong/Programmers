function solution(n) {
  let answer = "";
  const num = ["4", "1", "2"];

  while (n) {
    answer = num[n % 3] + answer;
    n = n % 3 === 0 ? parseInt(n / 3) - 1 : parseInt(n / 3);
  }

  return answer;
}
