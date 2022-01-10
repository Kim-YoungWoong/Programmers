def solution(s):
    temp = s.split(' ')
    temp = [int(x) for x in temp]
    temp = sorted(temp)
    maxN, minN = temp[-1], temp[0]
    answer = str(minN) + ' ' + str(maxN)

    return answer