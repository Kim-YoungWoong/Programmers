function solution(numbers) {
  const answer = numbers.map((v) => {
    v = "0" + v.toString(2);
    // 1. 맨 뒤 비트가 0일 때: 맨 뒤 비트를 1로 바꿔주면 해당 수보다 큰 수 중 가장 작은 값이 된다.
    if (v[v.length - 1] === "0") {
      v = v.slice(0, v.length - 1) + "1";
      return parseInt(v, 2);
    } else {
      // 2. 맨 뒤 비트가 0이 아닐 때: 뒤에서 부터 첫번째로 등장하는 "01"을 찾는다.
      // 그리고 이 부분을 "10"으로 바꿔주면 2비트만 바꾸어 만들 수 있는 가장 작은 값이 된다.
      const idx = v.lastIndexOf("01");
      v = v.slice(0, idx) + "10" + v.slice(idx + 2);
      return parseInt(v, 2);
    }
  });
  return answer;
}
