const check = (str1, str2) => {
  return Number(str1) <= Number(str2) ? true : false;
};

function solution(t, p) {
  let answer = 0;
  let left = 0;
  let right = left + p.length;

  while (right < t.length + 1) {
    if (check(t.slice(left, right), p)) answer++;

    left++;
    right = left + p.length;
  }

  return answer;
}
