from collections import deque

def solution(prices):
    answer = []
    queue = deque(prices)

    while queue:
        temp = queue.popleft()
        second = 0
        for i in queue:
            second += 1
            if temp > i:
                break
        answer.append(second)

    return answer