const Combination = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((select, idx, origin) => {
    const remainder = origin.slice(idx + 1);
    const combination = Combination(remainder, num - 1);
    const combine = combination.map((v) => [select, ...v]);
    result.push(...combine);
  });

  return result;
};

const isUnique = (combi, relation, relationLength) => {
  const set = new Set();
  relation.forEach((r) => {
    let str = "";
    combi.forEach((i) => {
      str += r[i];
    });
    set.add(str);
  });
  return relationLength === set.size;
};

const isMinimal = (combi, minimal) => {
  let isMinimal = true;
  minimal.forEach((m) => {
    let cnt = 0;
    m.forEach((v) => {
      if (combi.indexOf(v) !== -1) cnt++;
    });
    if (cnt === m.length) isMinimal = false;
  });
  return isMinimal;
};

function solution(relation) {
  let answer = 0;
  let combi = [];
  const minimal = [];
  const relationLength = relation[0].length;
  const arr = new Array(relationLength).fill().map((v, i) => (v = i));
  for (let i = 1; i <= relationLength; i++) {
    combi = [...combi, ...Combination(arr, i)];
  }
  combi.forEach((c) => {
    if (isMinimal(c, minimal) && isUnique(c, relation, relation.length)) {
      answer++;
      minimal.push(c);
    }
  });

  return answer;
}
