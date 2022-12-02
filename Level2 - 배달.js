function solution(N, road, K) {
  const time = Array.from({ length: N + 1 }, () => 500001);
  const graph = Array.from({ length: N + 1 }, () => []);

  road.forEach((v) => {
    let [s, e, t] = v;
    graph[s].push({ to: e, time: t });
    graph[e].push({ to: s, time: t });
  });

  const q = [{ to: 1, time: 0 }];
  time[1] = 0;

  while (q.length) {
    let { to } = q.pop();

    graph[to].forEach((next) => {
      if (time[next.to] > time[to] + next.time) {
        time[next.to] = time[to] + next.time;
        q.push(next);
      }
    });
  }

  return time.filter((v) => v <= K).length;
}
