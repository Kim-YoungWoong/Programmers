function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;
  const tree = Array.from({ length: n + 1 }, () => []);
  wires.forEach((v) => {
    const [a, b] = v;
    tree[a].push(b);
    tree[b].push(a);
  });

  const Search = (root, cut) => {
    let count = 0;
    const q = [root];
    const visited = [];
    visited[root] = true;

    while (q.length) {
      const now = q.pop();
      tree[now].forEach((v) => {
        if (v !== cut && !visited[v]) {
          q.push(v);
          visited[v] = true;
        }
      });
      count++;
    }

    return count;
  };

  wires.forEach((v) => {
    const [a, b] = v;
    const diff = Math.abs(Search(a, b) - Search(b, a));
    answer = Math.min(answer, diff);
  });

  return answer;
}
