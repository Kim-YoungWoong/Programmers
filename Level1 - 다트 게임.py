def solution(dartResult):
    dartResult = dartResult.replace('10', '!')
    stack = []
    answer = []

    for i in dartResult:
        if i.isnumeric():
            stack.append(int(i))
        elif i == '!':
            stack.append(10)

        elif i == 'S':
            answer.append(stack.pop())
        elif i == 'D':
            answer.append(stack.pop() ** 2)
        elif i == 'T':
            answer.append(stack.pop() ** 3)

        elif i == '*':
            if len(answer) > 1:
                answer[-2] *= 2
                answer[-1] *= 2
            else:
                answer[-1] *= 2
        elif i == '#':
            answer[-1] *= -1

    return sum(answer)