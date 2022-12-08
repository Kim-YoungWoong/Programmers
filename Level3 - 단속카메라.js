function solution(routes) {
  let answer = 1;
  routes = routes.sort((a, b) => a[0] - b[0]);
  let exit = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    if (exit < routes[i][0]) {
      answer++;
      exit = routes[i][1];
    }
    if (exit > routes[i][1]) {
      exit = routes[i][1];
    }
  }

  return answer;
}
