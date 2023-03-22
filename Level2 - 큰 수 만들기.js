function solution(number, k) {
  const stack = [];
  // k가 0보다 크고 stack의 끝이 number[i]보다 작다면
  // stack pop, k--
  // stack.push(number[i])
  for (let i = 0; i < number.length; i++) {
    while (k > 0 && stack.at(-1) < number[i]) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }
  // number를 다 반복했는데 k가 남은경우
  // 뒤에서 k만큼 잘라줘야함
  stack.splice(stack.length - k, k);
  return stack.join("");
}
