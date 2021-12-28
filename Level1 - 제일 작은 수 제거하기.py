def solution(arr):
    answer = []
    n = min(arr)
    answer = [x for x in arr if x != n]

    if not answer:
        answer.append(-1)

    return answer