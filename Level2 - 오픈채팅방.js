function solution(record) {
  let answer = [];
  let temp = {};

  record.forEach(v => {
    v = v.split(' ');
    const [state, uid, name] = v;
    if (state === "Enter" || state === "Change") {
      temp[uid] = name;
    }
  });

  record.forEach(v => {
    v = v.split(' ');
    const [state, uid, name] = v;
    if (state === "Enter") {
      answer.push(`${temp[uid]}님이 들어왔습니다.`);
    }
    if (state === "Leave") {
      answer.push(`${temp[uid]}님이 나갔습니다.`);
    }
  });

  return answer;
}