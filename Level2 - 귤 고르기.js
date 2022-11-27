const solution = (k, tangerine) => {
  let answer = 0;
  const map = new Map();
  tangerine.forEach((v) => {
    if (map.has(v)) {
      let val = map.get(v);
      val++;
      map.set(v, val);
    } else {
      map.set(v, 1);
    }
  });

  const mapToArray = [...map].sort((a, b) => b[1] - a[1]);
  for (const [key, value] of mapToArray) {
    if (k >= 0) {
      k -= value;
      answer++;
      if (k <= 0) {
        break;
      }
    }
  }

  return answer;
};
