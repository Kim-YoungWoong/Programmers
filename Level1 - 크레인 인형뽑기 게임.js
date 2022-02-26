function solution(board, moves) {
  var answer = 0;
  const stack = [];
  while (true) {
    if (moves.length === 0) break;

    let target = moves.shift() - 1;
    for (let i = 0; i < board.length; i++) {
      if (board[i][target] != 0) {
        stack.push(board[i][target]);
        board[i][target] = 0;
        break;
      }
    }

    if (stack.length > 0) {
      if (stack[stack.length - 1] === stack[stack.length - 2]) {
        stack.pop();
        stack.pop();
        answer += 2;
      }
    }
  }
  return answer;
}
