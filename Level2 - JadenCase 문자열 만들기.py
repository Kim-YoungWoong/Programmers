def solution(s):
    answer = []
    temp = s.split(' ')
    for a in temp:
        a = a[:1].upper() + a[1:].lower()
        answer.append(a)

    return ' '.join(answer)