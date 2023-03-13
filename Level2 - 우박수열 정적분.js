function solution(k, ranges) {
  const hailStorm = [0];

  while (k > 1) {
    if (k % 2) {
      // 사다리꼴 넓이 구하기
      hailStorm.push((k + k * 3 + 1) / 2 + hailStorm.at(-1));
      k = k * 3 + 1;
    } else {
      hailStorm.push((k + k / 2) / 2 + hailStorm.at(-1));
      k /= 2;
    }
  }

  return ranges.map(([start, end]) => {
    if (hailStorm.length - 1 + end < start) return -1;
    return hailStorm.at(end - 1) - hailStorm[start];
  });
}
