function solution(maps) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const row = maps.length;
  const col = maps[0].length;
  const visited = [];
  for (let i = 0; i < row; i++) {
    visited.push(Array.from({ length: col }).fill(0));
  }
  const q = [[0, 0]];

  while (q.length) {
    const [y, x] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < col && ny >= 0 && ny < row && visited[ny][nx] === 0 && maps[ny][nx] === 1) {
        visited[ny][nx] = visited[y][x] + 1;
        q.push([ny, nx]);
      }
    }
  }

  return visited[row - 1][col - 1] === 0 ? -1 : visited[row - 1][col - 1] + 1;
}
