def solution(s):
    answer = []
    a = s.split(' ')

    for i in range(len(a)):
        temp = ''
        for j in range(len(a[i])):
            if j % 2 == 0:
                temp += a[i][j].upper()
            else:
                temp += a[i][j].lower()
        answer.append(temp)

    return ' '.join(answer)