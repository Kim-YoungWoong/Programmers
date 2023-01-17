function solution(board) {
  const N = board.length;
  // 3차원 dp
  const visited = Array(N)
    .fill()
    .map(() =>
      Array(N)
        .fill()
        .map(() => Array(4).fill(Infinity))
    );
  const DIRECTIONS = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ]; // 우,좌,상,하

  const isValid = (x, y) => x >= 0 && x < N && y >= 0 && y < N && board[x][y] !== 1; // 유효한지 체크
  const q = [
    [0, 0, 0, 0],
    [0, 0, 0, 3],
  ]; // 오른쪽, 아래쪽 출발
  while (q.length) {
    const [x, y, cost, dir] = q.shift();
    for (let i = 0; i < DIRECTIONS.length; i++) {
      const nx = x + DIRECTIONS[i][0];
      const ny = y + DIRECTIONS[i][1];

      if (isValid(nx, ny)) {
        let new_cost = cost + 100; // 직선도로는 100원
        if (dir !== i) new_cost += 500;
        // dir과 i가 같지 않다는 것은 방향이 달라졌다는 뜻이므로 500원 추가 (곡선도로 600원)
        if (new_cost < visited[nx][ny][i]) {
          visited[nx][ny][i] = new_cost;
          q.push([nx, ny, new_cost, i]);
        }
      }
    }
  }

  return Math.min(...visited[N - 1][N - 1]);
}
