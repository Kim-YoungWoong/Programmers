function solution(id, report, k) {
  const id_list = {};
  const report_list = {};
  id.forEach(v => { // id object 값을 0으로 초기화하여 생성
    id_list[v] = 0;
  });

  let temp = new Set(report); // 한 유저가 같은 유저를 여러 번 신고한 경우 제거
  report = Array.from(temp);

  report.forEach(v => {
    const [user_id, report_id] = v.split(' '); // 공백을 기준으로 사용자아이디와 신고한 아이디를 나눠줌
    if (!report_list[report_id]) report_list[report_id] = [user_id]; // 신고 받은 아이디 오브젝트에 값을 채워줌
    else report_list[report_id].push(user_id);
  });

  id.forEach(v => {
    if (report_list[v] && report_list[v].length >= k) { // k 이상 신고 받은 아이디
      report_list[v].forEach(v => { // 신고 받은 아이디 오브젝트에 있는 신고한 사용자의 아이디의 숫자를 1씩 증가
        id_list[v]++;
      });
    }
  });

  return Object.values(id_list);
}