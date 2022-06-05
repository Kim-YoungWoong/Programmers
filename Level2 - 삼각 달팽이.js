function solution(n) {
  const triangle = [];
  let num = 1;
  let [x, y] = [-1, 0];

  for (let i = 1; i <= n; i++) {
    const temp = Array.from({ length: i }).fill(0);
    triangle.push(temp);
  }

  while (n > 0) {
    for (let i = 0; i < n; i++) {
      triangle[++x][y] = num;
      num++;
    }
    for (let i = 0; i < n - 1; i++) {
      triangle[x][++y] = num;
      num++;
    }
    for (let i = 0; i < n - 2; i++) {
      triangle[--x][--y] = num;
      num++;
    }
    n -= 3;
  }

  return triangle.reduce((acc, cur) => [...acc, ...cur], []);
}
