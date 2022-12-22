function solution(n, stations, w) {
  let answer = 0;
  let start = 0;
  stations = stations.map((v) => v - 1);

  while (start < n) {
    if (start >= stations[0] - w && start <= stations[0] + w) {
      start = stations[0] + w;
      stations.shift();
    } else {
      start += w * 2;
      answer++;
    }
    start++;
  }

  return answer;
}
