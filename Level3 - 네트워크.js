function solution(n, computers) {
  var answer = 0;
  let visited = Array.from({ length: n }, () => false);

  function dfs(idx) {
    visited[idx] = true;
    computers.forEach((v, i) => {
      if (v[idx] && !visited[i]) dfs(i);
    });
  }

  computers.forEach((v, i) => {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  });

  return answer;
}
