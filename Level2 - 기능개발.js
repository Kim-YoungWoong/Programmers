function solution(progresses, speeds) {
  const answer = [];
  let cnt = 0;
  while (progresses.length > 0) {
    for (let i = 0; i < speeds.length; i++) {
      progresses[i] += speeds[i];
    }
    while (true) {
      if (progresses[0] >= 100) {
        cnt++;
        progresses.shift();
        speeds.shift();
      } else {
        if (cnt > 0) {
          answer.push(cnt);
        }
        cnt = 0;
        break;
      }
    }
  }
  return answer;
}
