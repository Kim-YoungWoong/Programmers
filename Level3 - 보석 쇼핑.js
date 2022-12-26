function solution(gems) {
  let answer = [1, gems.length];
  const gemsCnt = new Set(gems).size;
  const gemsMap = new Map();

  gems.forEach((gem, idx) => {
    gemsMap.delete(gem);
    gemsMap.set(gem, idx);
    if (gemsMap.size === gemsCnt) {
      const temp = [gemsMap.values().next().value + 1, idx + 1];
      const tempLen = temp[1] - temp[0];
      const answerLen = answer[1] - answer[0];
      if (answerLen > tempLen) answer = temp;
    }
  });

  return answer;
}
