def solution(absolutes, signs):
    answer = 0

    for i in range(len(absolutes)):
        if signs[i] == False:
            absolutes[i] = -absolutes[i]

    return sum([answer + i for i in absolutes])