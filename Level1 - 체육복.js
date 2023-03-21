function solution(n, lost, reserve) {
  // 체육복이 있는 학생 수 = 전체 학생 수 - 체육복이 없는 학생 수
  let answer = n - lost.length;

  // 여분있는데 도난 당한 사람 찾아서 빼주기
  for (let i = 1; i <= n; i++) {
    if (lost.includes(i) && reserve.includes(i)) {
      lost = lost.filter((v) => v !== i);
      reserve = reserve.filter((v) => v !== i);
      answer++;
    }
  }

  lost
    .sort((a, b) => a - b)
    .forEach((l) => {
      if (reserve.includes(l - 1)) {
        answer++;
        reserve = reserve.filter((v) => v !== l - 1);
      } else if (reserve.includes(l + 1)) {
        answer++;
        reserve = reserve.filter((v) => v !== l + 1);
      }
    });

  return answer;
}
