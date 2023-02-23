function solution(numbers) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, cur) => acc * cur);
}
