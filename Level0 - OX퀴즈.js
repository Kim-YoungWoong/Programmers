function calculate(num1, op, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (op === "+") return num1 + num2;
  else if (op === "-") return num1 - num2;
}

function solution(quiz) {
  const answer = [];
  quiz.forEach((q) => {
    const divided = q.split(" ");
    if (calculate(divided[0], divided[1], divided[2]) === Number(divided[4]))
      answer.push("O");
    else answer.push("X");
  });

  return answer;
}
