function solution(s) {
  let [cnt, remove] = [0, 0];
  let n = 0;
  let str = "";
  while (s !== "1") {
    [n, str] = Conversion(s);
    remove += n;
    s = str;
    cnt++;
  }

  return [cnt, remove];
}

function Conversion(s) {
  let temp = s.split("0").join("");
  let cnt = temp.length;
  return [s.length - cnt, cnt.toString(2)];
}