function solution(topping) {
  let answer = 0;
  const map = new Map();
  const set = new Set();

  topping.forEach((v) => {
    if (map.has(v)) {
      let value = map.get(v);
      value++;
      map.set(v, value);
    } else {
      map.set(v, 1);
    }
  });

  topping.forEach((v) => {
    let value = map.get(v);
    value--;
    map.set(v, value);
    set.add(v);

    if (map.get(v) === 0) {
      map.delete(v);
    }

    if (set.size === map.size) answer++;
  });

  return answer;
}
