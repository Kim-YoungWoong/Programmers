function solution(food) {
  let front = "";

  const half = food.map((v, i) => {
    if (i !== 0) {
      v = Math.floor(v / 2);
      return v;
    } else return 1;
  });

  for (let i = 1; i < half.length; i++) {
    front += `${i}`.repeat(half[i]);
  }
  const back = front.split("").reverse().join("");

  return front + "0" + back;
}
