function solution(elements) {
  const answer = new Set();

  for (let i = 0; i < elements.length; i++) {
    const temp = [...elements, ...elements.slice(0, i)];
    let j = 0;
    while (j <= elements.length) {
      let sum = temp.slice(j, j + i);
      if (sum.length !== 0) answer.add(sum.reduce((a, c) => a + c));
      j++;
    }
  }
  answer.add(elements.reduce((a, c) => a + c));
  return answer.size;
}
