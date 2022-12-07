const check = (str1, str2) => {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) count++;
  }
  return count === 1 ? true : false;
};

const solution = (begin, target, words) => {
  const visited = new Map();
  visited.set(begin, 0);
  const q = [begin];

  while (q.length) {
    const now = q.shift();

    if (now === target) break;

    words.forEach((v) => {
      if (check(v, now) && !visited.has(v)) {
        const temp = visited.get(now) + 1;
        visited.set(v, temp);
        q.push(v);
      }
    });
  }

  return visited.has(target) ? visited.get(target) : 0;
};
