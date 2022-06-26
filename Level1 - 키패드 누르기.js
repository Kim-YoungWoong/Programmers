function solution(numbers, hand) {
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  }

  let answer = '';
  let curLeft = keypad["*"];
  let curRight = keypad["#"];

  numbers.forEach(v => {
    if (v % 3 === 1 || v === '*') {
      answer += "L"
      curLeft = keypad[v];
    } else if ((v % 3 === 0 && v !== 0) || v === '#') {
      answer += "R"
      curRight = keypad[v];
    } else {
      let left = Distance(curLeft, keypad[v]);
      let right = Distance(curRight, keypad[v]);
      if (left < right) {
        answer += "L";
        curLeft = keypad[v];
      } else if (left > right) {
        answer += "R";
        curRight = keypad[v];
      } else {
        if (hand === "left") {
          answer += "L"
          curLeft = keypad[v];
        } else {
          answer += "R";
          curRight = keypad[v];
        }
      }
    }
  });

  return answer;
}

function Distance(arr1, arr2) {
  let d = Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
  return d;
}