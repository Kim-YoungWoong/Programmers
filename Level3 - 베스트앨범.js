function solution(genres, plays) {
  const answer = [];
  let album = new Map();

  genres.forEach((v, i) => {
    if (album.has(v)) {
      let temp = album.get(v);
      temp[0] += plays[i];
      temp.push([i, plays[i]]);
      album.set(v, temp);
    } else {
      album.set(v, [plays[i], [i, plays[i]]]);
    }
  });

  const album_list = [...album];
  album_list.forEach((v) => v[1].sort((a, b) => b[1] - a[1]));
  album_list.sort((a, b) => b[1][0] - a[1][0]);

  album = new Map(album_list);

  album.forEach((v) => v.shift());
  album.forEach((v) => {
    v.forEach((v2, i) => {
      if (i < 2) answer.push(v2[0]);
    });
  });

  return answer;
}
