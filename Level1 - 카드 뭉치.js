function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    if (cards1[0] !== goal[i] && cards2[0] !== goal[i]) return "No";
    else {
      if (cards1[0] === goal[i]) {
        cards1.shift();
        continue;
      } else {
        cards2.shift();
        continue;
      }
    }
  }
  return "Yes";
}
