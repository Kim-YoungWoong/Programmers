function solution(fees, records) {
  // 공백을 기준으로 나눈 다음, 시간 문자열을 실제 시간으로 변환
  records = records.map(r => r.split(" ")).map(v => {
    v.splice(0, 1, HourToMinute(v[0]))
    return v;
  });

  // 자동차 번호 배열을 따로 만들어서 중복을 제거
  const sortCar = [];
  let carNums = records.map(v => v[1]);
  carNums = new Set(carNums);
  carNums = Array.from(carNums);

  // 만든 번호 배열로 자동차 번호 마다 주차 기록 배열 생성
  carNums.forEach(c => {
    const tempArr = [];
    records.forEach(r => {
      if (c === r[1]) {
        tempArr.push(r);
      }
    });
    sortCar.push(tempArr);
  });

  // 자동차 배열 재구성
  for (let i = 0; i < sortCar.length; i++) {
    // 자동차 배열의 길이가 홀수면 [1439,차번호,OUT]을 끝에 추가해주는 함수
    checkInOut(sortCar[i]);
  }

  // 각 자동차 번호와 주차한 시간이 담긴 배열이 담긴 자동차 배열을 만든다.
  const car = [];
  sortCar.forEach(s => {
    let time = [];
    let num = "";
    s.forEach(v => {
      time.push(v[0]);
      num = v[1];
    });
    time.sort((a, b) => b - a); // 시간이 큰 순서로 정렬
    time = time.reduce((acc, cur, i) => { // 더하고 뺴고 반복
      if (i % 2 === 0) return acc + cur;
      else return acc - cur;
    });
    car.push([num, time]); // 자동차 번호와 주차한 시간이 담겨있는 배열을 추가
  });

  // 자동차 번호가 작은 순서로 정렬한 다음 주차 요금을 계산한다.
  return car.sort().map(v => calculate(v, fees));
}

function calculate(arr, fee) { // 주차 요금 계산 함수
  const remain = arr[1] - fee[0];
  let remainCal = 0;
  if (remain % fee[2] === 0) {
    remainCal = (parseInt(remain / fee[2])) * fee[3];
  } else {
    remainCal = (parseInt(remain / fee[2]) + 1) * fee[3];
  }

  return remain > 0 ? fee[1] + remainCal : fee[1];
}

function HourToMinute(s) { // 시간 문자열을 시간으로 변환하는 함수
  const hour = parseInt(s.slice(0, 2));
  const minute = parseInt(s.slice(3));

  return hour * 60 + minute;
}

function checkInOut(arr) { // 입차만 하고 끝난 차에 23:59 OUT을 추가하는 함수
  if (arr.length % 2 != 0) {
    arr.push([1439, arr[0][1], "OUT"]);
  }
  return arr;
}