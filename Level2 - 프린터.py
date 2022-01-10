def solution(p, location):
    answer = []
    loc = [x for x in range(len(p))]
    while len(p) > 0:
        if p[0] == max(p):
            p.pop(0)
            answer.append(loc.pop(0))
        else:
            p.append(p.pop(0))
            loc.append(loc.pop(0))

    return answer.index(location) + 1