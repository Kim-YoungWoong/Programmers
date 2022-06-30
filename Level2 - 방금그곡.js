function solution(m, musicinfos) {
  const answer = [];
  m = replaceSharp(m);

  musicinfos = musicinfos.map(v => v.split(","));
  musicinfos.forEach(v => {
    let [start, end, name, content] = v;
    content = replaceSharp(content);

    const time = timeCalculate(start, end);
    if (content.length > time) {
      content = content.slice(0, time);
    } else if (content.length < time) {
      const quo = parseInt(time / content.length);
      for (let i = 0; i < quo; i++) {
        if (content.length > time) break;
        content += content;
      }
      content = content.slice(0, time);
    }
    if (content.includes(m)) answer.push([name, time]);
  });

  if (answer.length === 0) return "(None)";
  if (answer.length > 1) {
    answer.sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] === b[1]) return 0;
      if (a[1] < b[1]) return 1;
    });
    return answer[0][0];
  }
  return answer[0][0];
}

function timeCalculate(n1, n2) {
  const temp1 = n1.split(":").map(v => parseInt(v));
  const temp2 = n2.split(":").map(v => parseInt(v));

  const first = temp1[0] * 60 + temp1[1];
  const second = temp2[0] * 60 + temp2[1];

  return second - first;
}

function replaceSharp(str) {
  str = str.replace(/C#/gi, "Z");
  str = str.replace(/D#/gi, "X");
  str = str.replace(/F#/gi, "V");
  str = str.replace(/G#/gi, "N");
  str = str.replace(/A#/gi, "M");
  return str;
}