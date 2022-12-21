const Permutation = (arr, num) => {
  // 시간복잡도 O(n!)
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((select, i, origin) => {
    const remainder = [...origin.slice(0, i), ...origin.slice(i + 1)];
    const permutation = Permutation(remainder, num - 1);
    const combine = permutation.map((v) => [select, ...v]);
    result.push(...combine);
  });

  return result;
};

const check = (uid, bid) => {
  // 시간복잡도 O(n^2)
  uid = uid.sort((a, b) => a.length - b.length);
  bid = bid.sort((a, b) => a.length - b.length);

  for (let i = 0; i < uid.length; i++) {
    if (uid[i].length !== bid[i].length) return false;

    for (let j = 0; j < uid[i].length; j++) {
      if (bid[i][j] === "*") continue;
      if (uid[i][j] !== bid[i][j]) return false;
    }
  }
  return true;
};

function solution(user_id, banned_id) {
  // 시간복잡도 O(n!)
  const permutation = Permutation(user_id, banned_id.length);
  const checkArr = permutation.filter((v) => check(v, banned_id));
  const set = new Set();
  checkArr.forEach((v) => set.add(v.sort().join("")));

  return set.size;
}
