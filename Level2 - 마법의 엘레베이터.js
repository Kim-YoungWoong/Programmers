function solution(storey) {
  let answer = 0;

  while (storey) {
    const remain = storey % 10;

    if (remain > 5) {
      answer += 10 - remain;
      storey += 10;
    } else if (remain < 5) answer += remain;
    else {
      if (parseInt(storey / 10) % 10 > 4) storey += 10;
      answer += remain;
    }
    storey /= 10;
    storey = parseInt(storey);
  }

  return answer;
}
