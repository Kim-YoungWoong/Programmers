function solution(word) {
  let answer = 0;
  const rule = [781, 156, 31, 6, 1];
  const alp = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  answer = word.split("").reduce((acc, cur, idx) => {
    return acc + rule[idx] * alp[cur] + 1;
  }, 0);
  return answer;
}
