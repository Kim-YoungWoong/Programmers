const Combination = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);
  arr.forEach((select, i, origin) => {
    const remainder = origin.slice(i + 1);
    const combination = Combination(remainder, num - 1);
    const combine = combination.map((v) => [select, ...v]);
    result.push(...combine);
  });
  return result;
};

function solution(number) {
  let answer = 0;
  const combi = Combination(number, 3);
  combi.forEach((c) => {
    const sum = c.reduce((acc, cur) => acc + cur, 0);
    if (sum === 0) answer++;
  });
  return answer;
}
