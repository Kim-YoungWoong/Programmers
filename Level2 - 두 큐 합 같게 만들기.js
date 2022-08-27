function solution(q1, q2) {
  let sum1 = q1.reduce((acc, cur) => acc + cur);
  let sum2 = q2.reduce((acc, cur) => acc + cur);
  const goal = (sum1 + sum2) / 2;
  let p1 = 0;
  let p2 = q1.length;
  const q = [...q1, ...q2];

  for (let i = 0; i < q1.length * 3; i++) {
    if (sum1 === goal) return i;

    if (sum1 > goal) sum1 -= q[p1++];
    else sum1 += q[p2++];
  }

  return -1;
}

// from collections import deque
// 파이썬
// def solution(queue1, queue2):
//     q1 = deque(queue1)
//     q2 = deque(queue2)
//     answer = 0
//     goal = (sum(q1)+sum(q2)) / 2
//     q1_sum, q2_sum = sum(q1), sum(q2)

//     for _ in range(len(queue1)*3):
//         if q1_sum == q2_sum:
//             return answer

//         elif q1_sum > goal:
//             temp1 = q1.popleft()
//             q2.append(temp1)
//             q1_sum -= temp1
//             q2_sum += temp1
//             answer += 1

//         else:
//             temp2 = q2.popleft()
//             q1.append(temp2)
//             q1_sum += temp2
//             q2_sum -= temp2
//             answer += 1

//     return -1
