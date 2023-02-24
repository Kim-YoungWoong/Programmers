function solution(s, skip, index) {
  let answer = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((v) => !skip.includes(v));

  for (let i = 0; i < s.length; i++) {
    const idx = alphabet.indexOf(s[i]);
    answer += alphabet[(idx + index) % alphabet.length];
  }

  return answer;
}
