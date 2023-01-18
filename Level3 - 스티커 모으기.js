function solution(sticker) {
  const N = sticker.length + 2;
  const dp0 = Array(N).fill(0);
  const dp1 = Array(N).fill(0);

  if (N - 2 === 1) return sticker[0];

  for (let i = 2; i < N - 1; i++) {
    dp0[i] = Math.max(dp0[i - 1], dp0[i - 2] + sticker[i - 2]);
  }
  for (let i = 3; i < N; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i - 2]);
  }

  return Math.max(dp0.at(-2), dp1.at(-1));
}
