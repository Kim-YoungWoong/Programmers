function solution(str1, str2) {
  const temp1 = [];
  const temp2 = [];
  const pattern = /[a-zA-Z]/;
  str1 = str1.toUpperCase().split("");
  str2 = str2.toUpperCase().split("");

  // 다중 집합의 원소를 만들기
  for (let i = 0; i < str1.length - 1; i++) {
    let word = "";
    if (pattern.test(str1[i]) && pattern.test(str1[i + 1])) {
      word += str1[i] + str1[i + 1];
      temp1.push(word);
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    let word = "";
    if (pattern.test(str2[i]) && pattern.test(str2[i + 1])) {
      word += str2[i] + str2[i + 1];
      temp2.push(word);
    }
  }

  // 자카드 유사도 구하기
  let union = 0;
  let intersection = 0;
  const set = [...new Set([...temp1, ...temp2])];
  set.forEach((v) => {
    const t1 = temp1.filter((x) => x === v).length;
    const t2 = temp2.filter((x) => x === v).length;
    union += Math.max(t1, t2);
    intersection += Math.min(t1, t2);
  });

  if (union === 0 && intersection === 0) return 65536;
  return Math.floor(65536 * (intersection / union));
}
