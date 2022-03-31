function solution(s) {
  const answer = [];
  const numList = [];
  const temp = {};
  s = s.replace("{{", "").replace("}}", "").split("},{");
  for (let i = 0; i < s.length; i++) {
    const temp = s[i].split(",").map((v) => Number(v));
    numList.push(temp);
  }
  for (let i = 0; i < numList.length; i++) {
    for (let j = 0; j < numList[i].length; j++) {
      if (!temp[numList[i][j]]) temp[numList[i][j]] = 1;
      else temp[numList[i][j]]++;
    }
  }
  for (let i in temp) {
    answer.push([i, temp[i]]);
  }
  answer.sort((a, b) => b[1] - a[1]);

  return answer.map((v) => Number(v[0]));
}
