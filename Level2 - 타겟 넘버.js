function solution(numbers, target) {
  let answer = 0;

  function dfs(d, sum) {
    if (d === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    dfs(d + 1, sum + numbers[d]);
    dfs(d + 1, sum - numbers[d]);
  }
  dfs(0, 0);

  return answer;
}