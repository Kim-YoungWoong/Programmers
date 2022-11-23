const check4 = (arr) => {
  const erase = [];
  let cnt = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[0].length - 1; j++) {
      if (arr[i][j] && arr[i][j] === arr[i + 1][j] && arr[i][j] === arr[i][j + 1] && arr[i][j] === arr[i + 1][j + 1]) {
        erase.push([i, j]);
        erase.push([i + 1, j]);
        erase.push([i, j + 1]);
        erase.push([i + 1, j + 1]);
      }
    }
  }
  for (let i = 0; i < erase.length; i++) {
    [a, b] = [erase[i][0], erase[i][1]];
    if (arr[a][b] != 0) {
      arr[a][b] = 0;
      cnt++;
    }
  }

  return cnt;
};

const fillEmpty = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    if (!arr[i].some((v) => !v)) continue;
    for (let j = 0; j < arr[0].length; j++) {
      for (let k = i - 1; k >= 0 && !arr[i][j]; k--) {
        if (arr[k][j]) {
          arr[i][j] = arr[k][j];
          arr[k][j] = 0;
          break;
        }
      }
    }
  }
};

function solution(m, n, board) {
  let answer = 0;
  board = board.map((v) => v.split(""));
  while (true) {
    const total = check4(board);
    fillEmpty(board);
    if (total != 0) {
      answer += total;
    } else return answer;
  }
}
