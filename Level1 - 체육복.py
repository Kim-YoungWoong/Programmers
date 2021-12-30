def solution(n, lost, reserve):
    setL = list(set(lost) - set(reserve))
    setR = list(set(reserve) - set(lost))
    sorted(setL)
    sorted(setR)

    for i in setR:
        if i - 1 in setL:
            setL.remove(i - 1)
        elif i + 1 in setL:
            setL.remove(i + 1)

    return n - len(setL)