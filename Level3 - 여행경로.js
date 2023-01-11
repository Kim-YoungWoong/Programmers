const solution = (tickets) => {
  const answer = [];
  const visited = Array(tickets.length).fill(0);
  const finished = tickets.length + 1;

  const backTracking = (travelPath) => {
    if (travelPath.length === finished) {
      answer.push(travelPath);
      return;
    }
    tickets.forEach((ticket, i) => {
      if (!visited[i]) {
        const [start, end] = ticket;
        if (travelPath.at(-1) == start) {
          visited[i] = 1;
          backTracking([...travelPath, end]);
          visited[i] = 0;
        }
      }
    });
  };
  backTracking(["ICN"]);

  return answer.sort()[0];
};
