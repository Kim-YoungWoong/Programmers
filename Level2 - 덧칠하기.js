function solution(n, m, section) {
  let answer = 0;
  let check = section[0] + (m - 1);

  while (section.length) {
    if (section[0] <= check) section.shift();
    else {
      check = section[0] + (m - 1);
      answer++;
    }
  }
  return answer + 1;
}
