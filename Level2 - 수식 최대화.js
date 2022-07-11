function solution(expression) {
  const answer = [];
  const op = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "-", "+"],
    ["*", "+", "-"],
  ];

  op.forEach((o, oi) => {
    const exp = expression.split(/(\D)/);
    o.forEach((v, vi) => {
      while (exp.includes(v)) {
        const idx = exp.indexOf(v);
        const temp = Calculate(exp[idx - 1], exp[idx + 1], v);
        exp.splice(idx - 1, 3, temp);
      }
    });
    answer.push(exp[0]);
  });

  return Math.max(...answer.map(v => Math.abs(v)));
}

function Calculate(n1, n2, operator) {
  const num1 = parseInt(n1);
  const num2 = parseInt(n2);
  let result = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    default:
      break;
  }
  return result.toString();
}