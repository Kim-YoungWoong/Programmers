function solution(s) {
  const answer = [];
  const map = new Map();
  // 문자열을 key로 인덱스를 value로
  // 이미 인덱스가 있다면 현재 인덱스를 저장하고 현재 인덱스 - 있는 인덱스를 배열에 삽입
  // 없다면 현재 인덱스를 저장하고 -1를 배열에 삽입
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      const prev_idx = map.get(s[i]);
      map.set(s[i], i);
      answer.push(i - prev_idx);
    } else {
      map.set(s[i], i);
      answer.push(-1);
    }
  }
  return answer;
}
