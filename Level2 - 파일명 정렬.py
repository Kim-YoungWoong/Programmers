def solution(files):
    answer = []

    for f in files:
        head, number, tail = '', '', ''
        num_check = False

        for i in range(len(f)):
            if f[i].isdigit():
                number += f[i]
                num_check = True
            elif not num_check:
                head += f[i]
            else:
                tail += f[i:]
                break
        answer.append([head, number, tail])

    answer = sorted(answer, key=lambda x: (x[0].lower(), int(x[1])))

    return [''.join(x) for x in answer]