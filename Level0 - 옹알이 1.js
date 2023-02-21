function solution(babbling) {
  let answer = 0;
  const result = [];
  const visited = [0, 0, 0, 0];
  const words = ["aya", "ye", "woo", "ma"];

  const permutation = (num, cnt, s) => {
    if (cnt === num) {
      result.push(s);
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (!visited[i]) {
        visited[i] = 1;
        permutation(num, cnt + 1, s + words[i]);
        visited[i] = 0;
      }
    }
  };
  for (let i = 1; i <= 4; i++) {
    permutation(i, 0, "");
  }

  babbling.forEach((bab) => {
    if (result.includes(bab)) answer++;
  });

  return answer;
}
