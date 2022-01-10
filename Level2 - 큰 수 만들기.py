def solution(number, k):
    answer = []

    for i in number:
        while answer and i > answer[-1]:
            if k > 0:
                answer.pop()
                k -= 1
            else:
                break
        answer.append(i)

    if k > 0:
        for i in range(k):
            answer.pop()

    return ''.join(answer)