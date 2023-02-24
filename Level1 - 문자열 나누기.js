function solution(s) {
  let answer = 0;
  let [left, right] = [0, 1];
  let [left_cnt, right_cnt] = [1, 0];

  while (left < s.length) {
    if (s[left] === s[right]) left_cnt++;
    else right_cnt++;

    if (left_cnt === right_cnt) {
      answer++;
      left = right + 1;
      right = left + 1;
      left_cnt = 1;
      right_cnt = 0;
    } else right++;
  }
  return answer;
}
