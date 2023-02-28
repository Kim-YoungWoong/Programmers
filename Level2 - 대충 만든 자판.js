function solution(keymap, targets) {
  const answer = [];
  // 새로운 Map 선언 후 할당
  // - 자판의 최소 인덱스를 +1하여 저장
  const keyMap = new Map();
  keymap.forEach((map) => {
    for (let i = 0; i < map.length; i++) {
      if (keyMap.has(map[i])) {
        const idx = Math.min(i + 1, keyMap.get(map[i]));
        keyMap.set(map[i], idx);
      } else {
        keyMap.set(map[i], i + 1);
      }
    }
  });
  // target을 순회
  // - value를 더할 cnt 변수를 선언하고 0을 할당한다.
  // - 각 알파벳을 만들어 둔 Map에서 찾는다.
  // - value가 존재하면 cnt에 더한다.
  // - 존재하지 않으면 cnt를 -1로 바꾸고 반복을 종료한다.
  // - cnt를 answer에 넣는다.
  targets.forEach((target) => {
    let cnt = 0;
    for (let i = 0; i < target.length; i++) {
      const temp = keyMap.get(target[i]);
      if (temp) cnt += temp;
      else {
        cnt = -1;
        break;
      }
    }
    answer.push(cnt);
  });

  return answer;
}
