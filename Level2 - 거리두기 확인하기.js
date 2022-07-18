function solution(places) {
  const answer = [];
  places.forEach((v) => answer.push(CheckDistance(v)));

  return answer;
}

function CheckDistance(arr) {
  const room = arr.map((v) => v.split(""));
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  for (let i = 0; i < room.length; i++) {
    for (let j = 0; j < room[0].length; j++) {
      if (room[i][j] === "P") {
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (nx >= 0 && nx < room.length && ny >= 0 && ny < room[0].length) {
            if (room[nx][ny] === "P") return 0;
          }
        }
      }
      if (room[i][j] === "O") {
        let count = 0;
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (nx >= 0 && nx < room.length && ny >= 0 && ny < room[0].length) {
            if (room[nx][ny] === "P") count++;
            if (count > 1) return 0;
          }
        }
      }
    }
  }
  return 1;
}
