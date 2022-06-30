function solution(skill, skill_trees) {
  const arr = [];
  let answer = 0;

  skill_trees.forEach(v => {
    let str = "";
    for (let i = 0; i < v.length; i++) {
      const idx = skill.indexOf(v[i]);
      if (idx != -1) str += v[i];
    }
    arr.push(str);
  });

  arr.forEach(v => {
    let check = true;
    for (let i = 0; i < v.length; i++) {
      if (v[i] !== skill[i]) check = false;
    }
    if (check) answer++;
  })

  return answer;
}