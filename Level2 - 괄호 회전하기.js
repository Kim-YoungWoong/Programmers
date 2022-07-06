function solution(s) {
  const len = s.length;
  let answer = 0;

  for (let i = 0; i < len; i++) {
    const str = s.slice(i) + s.slice(0, i);
    answer += checkBracket(str);
  }

  return answer;
}

function checkBracket(s) {
  const stack = [];
  const str = s.split("");
  while (str.length > 0) {
    stack.push(str.shift());
    if (stack.length > 1) {
      if (stack[stack.length - 1] === "]" && stack[stack.length - 2] === "[") {
        stack.pop();
        stack.pop();
      } else if (stack[stack.length - 1] === ")" && stack[stack.length - 2] === "(") {
        stack.pop();
        stack.pop();
      } else if (stack[stack.length - 1] === "}" && stack[stack.length - 2] === "{") {
        stack.pop();
        stack.pop();
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
}
