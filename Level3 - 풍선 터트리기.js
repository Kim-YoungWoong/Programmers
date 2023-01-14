function solution(a) {
  let answer = 1;
  let left = 0;
  let right = a.length - 1;
  let left_value = a[left];
  let right_value = a[right];

  while (left < right) {
    if (left_value > right_value) {
      if (left_value > a[++left]) {
        left_value = a[left];
        answer++;
      }
    }
    if (right_value > left_value) {
      if (right_value > a[--right]) {
        right_value = a[right];
        answer++;
      }
    }
  }

  return answer;
}
