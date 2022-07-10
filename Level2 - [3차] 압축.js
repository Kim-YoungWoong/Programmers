function solution(msg) {
  const answer = [];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let n = 1;
  const dic = {};
  alphabet.forEach((v) => (dic[v] = n++));

  let idx = 0;
  while (idx < msg.length) {
    let str = "";
    while (dic[str + msg[idx]]) {
      str += msg[idx];
      idx++;
    }
    answer.push(dic[str]);
    dic[str + msg[idx]] = n++;
  }

  return answer;
}
