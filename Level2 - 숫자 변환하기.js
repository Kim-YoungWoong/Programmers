function solution(x, y, n) {
  if (x === y) return 0;
  const dp = {};
  dp[x] = 0;
  let queue = [x];

  while (queue.length) {
    const new_queue = [];
    for (const q of queue) {
      for (const num of [q + n, q * 2, q * 3]) {
        if (num > y || dp[num]) continue;
        if (num === y) return dp[q] + 1;
        dp[num] = dp[q] + 1;
        new_queue.push(num);
      }
    }
    queue = new_queue;
  }

  return -1;
}
