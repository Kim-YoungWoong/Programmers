function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  let answer = 0;
  const cache = [];
  cities = cities.map(v => v.toUpperCase());

  for (let i = 0; i < cities.length; i++) {
    if (!cache.includes(cities[i])) {
      cache.push(cities[i]);
      answer += 5;
      if (cache.length > cacheSize) cache.shift();
    } else {
      let idx = cache.indexOf(cities[i]);
      cache.splice(idx, 1);
      cache.push(cities[i]);
      answer++;
    }
  }

  return answer;
}