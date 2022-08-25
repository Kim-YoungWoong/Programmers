function solution(survey, choices) {
  let answer = "";
  const character = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0, X: 0 };

  survey.forEach((v, i) => {
    const [front, end] = Array.from(v);
    if (choices[i] / 4 >= 1) {
      const num = choices[i] % 4;
      character[end] += num;
    } else if (choices[i] / 4 < 1 && choices[i] % 4 !== 0) {
      const num = 4 - (choices[i] % 4);
      character[front] += num;
    }
  });

  let compare = [];
  for (let c in character) {
    if (compare.length === 2) {
      if (compare[0][1] < compare[1][1]) answer += compare[1][0];
      else answer += compare[0][0];
      compare.length = 0;
    }
    compare.push([c, character[c]]);
  }

  return answer;
}
