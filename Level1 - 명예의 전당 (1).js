function solution(k, score) {
  const answer = [];
  let honor = [];

  for (let i = 0; i < score.length; i++) {
    honor.push(score[i]);
    honor = honor.sort((a, b) => b - a);
    if (honor.length > k) honor.pop();
    answer.push(honor[honor.length - 1]);
  }

  return answer;
}
