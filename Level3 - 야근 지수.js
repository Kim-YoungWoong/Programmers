function solution(n, works) {
  works.sort((a, b) => a - b);
  while (n) {
    const max_value = works.at(-1);

    for (let i = works.length - 1; i >= 0; i--) {
      if (works[i] >= max_value) {
        if (n <= 0) break;
        works[i]--;
        n--;
      }
    }
  }

  return works.every((v) => v <= 0) ? 0 : works.map((v) => v ** 2).reduce((a, c) => a + c);
}
