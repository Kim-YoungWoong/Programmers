from collections import deque

def solution(people, limit):
    answer = 0
    people.sort(reverse=True)
    q = deque(people)

    while q:
        if len(q) > 1:
            if q[0] + q[-1] <= limit:
                q.pop()
                q.popleft()
                answer += 1
            else:
                q.popleft()
                answer += 1
        else:
            q.pop()
            answer += 1

    return answer