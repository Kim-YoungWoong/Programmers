function solution(N, stages) {
  const answer = [];
  let people = stages.length;
  let lev = 1;

  while (true) {
    if (lev > N) break;

    let temp = 0;
    for (let i = 0; i < stages.length; i++) {
      if (stages[i] === lev) {
        temp++;
      }
    }
    answer.push([lev, temp / people]);
    people -= temp;
    lev++;
  }

  answer.sort((a, b) => b[1] - a[1]);
  return answer.map((v) => v[0]);
}
