function solution(arr) {
  let max = 0;
  let check = false;
  let n = 1;
  while (true) {
    max = arr.reduce((arr, cur) => Math.max(arr, cur));
    max += n;
    for (let i of arr) {
      if (max % i === 0) check = true;
      else {
        check = false;
        break;
      }
    }
    if (check === true) return max;
    n++;
  }
}
