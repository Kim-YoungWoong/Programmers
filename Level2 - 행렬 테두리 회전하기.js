function solution(rows, columns, queries) {
  var answer = [];
  const arr = [];
  let n = 1;
  for (let i = 0; i < rows; i++) {
    const temp = [];
    for (let j = 0; j < columns; j++) {
      temp.push(n++);
    }
    arr.push(temp);
  }

  let minNum = 0;
  queries.forEach((v) => {
    let [x1, y1, x2, y2] = v;
    x1--;
    x2--;
    y1--;
    y2--;
    let temp = arr[x1][y1];
    minNum = temp;

    for (let i = x1; i < x2; i++) {
      // 왼쪽 열
      arr[i][y1] = arr[i + 1][y1];
      minNum = Math.min(minNum, arr[i][y1]);
    }
    for (let i = y1; i < y2; i++) {
      // 아래쪽 행
      arr[x2][i] = arr[x2][i + 1];
      minNum = Math.min(minNum, arr[x2][i]);
    }
    for (let i = x2; i > x1; i--) {
      // 오른쪽 열
      arr[i][y2] = arr[i - 1][y2];
      minNum = Math.min(minNum, arr[i][y2]);
    }
    for (let i = y2; i > y1; i--) {
      // 위쪽 행
      arr[x1][i] = arr[x1][i - 1];
      minNum = Math.min(minNum, arr[x1][i]);
    }
    arr[x1][y1 + 1] = temp;
    minNum = Math.min(minNum, arr[x1][y1 + 1]);
    answer.push(minNum);
  });

  return answer;
}
