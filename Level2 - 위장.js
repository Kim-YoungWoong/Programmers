function solution(clothes) {
  let answer = 1;
  const cloth = {};
  clothes.forEach(v => {
    !cloth[v[1]] ? cloth[v[1]] = 1 : cloth[v[1]]++;
  });
  for (const v in cloth) {
    answer *= cloth[v] + 1;
  }

  return answer - 1;
}