function solution(operations) {
  var answer = [];
  operations.forEach((v) => {
    let [oper, num] = v.split(" ");
    num = parseInt(num);

    if (oper === "I") answer.push(num);
    else {
      const value = num === 1 ? Math.max(...answer) : Math.min(...answer);
      const idx = answer.indexOf(value);
      answer.splice(idx, 1);
    }
  });

  return answer.length ? [Math.max(...answer), Math.min(...answer)] : [0, 0];
}
