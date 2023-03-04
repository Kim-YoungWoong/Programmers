function solution(babbling) {
  let answer = 0;
  const words = ["aya", "ye", "woo", "ma"];

  for (let bab of babbling) {
    for (const word of words) {
      if (!bab.includes(word + word)) bab = bab.split(word).join(" ");
    }
    if (bab.split(" ").join("").length === 0) answer++;
  }
  return answer;
}
