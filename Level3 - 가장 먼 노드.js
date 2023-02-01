function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);
  edge.forEach((v) => {
    const [s, e] = v;
    graph[s].push(e);
    graph[e].push(s);
  });
  const visited = new Array(n + 1).fill(0);

  const bfs = () => {
    const q = [1];
    visited[1] = 1;

    while (q.length) {
      const cur = q.shift();
      graph[cur].forEach((next) => {
        if (!visited[next]) {
          visited[next] = visited[cur] + 1;
          q.push(next);
        }
      });
    }
  };
  bfs();

  const max = Math.max(...visited);
  return visited.filter((v) => v === max).length;
}
