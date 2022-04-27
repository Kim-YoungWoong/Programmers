function solution(dirs) {
  let now = [0, 0];
  const visit = new Set();
  const move = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  };
  for (let i = 0; i < dirs.length; i++) {
    let x = now[0] + move[dirs[i]][0];
    let y = now[1] + move[dirs[i]][1];
    if (x > 5 || x < -5 || y > 5 || y < -5) continue;

    visit.add("" + now[0] + now[1] + x + y);
    visit.add("" + x + y + now[0] + now[1]);

    now = [x, y];
  }

  return visit.size / 2;
}
