function solution(n, k, enemy) {
  // 이분탐색
  let [left, right] = [0, enemy.length];

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    const enemy_cut = enemy.slice(0, mid).sort((a, b) => b - a);
    // mid까지 slice를 해서 내림차순으로 정렬 -> 무적권을 적의 수가 많은 순으로 사용하기 위해서
    let copy_k = k;

    const enemy_sum = enemy_cut.reduce((acc, cur) => {
      // slice한 enemy를 더해주는데
      if (copy_k > 0) {
        // 무적권이 남아있다면 무적권을 사용
        copy_k--;
        return acc;
      }
      return acc + cur; // 무적권이 없다면 적의 수를 더함
    }, 0);

    if (n - enemy_sum >= 0) left = mid + 1;
    else right = mid - 1;
    // 남은 병사의 수에서 적의 수의 합을 뺀 수가 0 이상이라면 left를 늘리고
    // 아니라면 right를 늘린다.
  }
  return right;
}
