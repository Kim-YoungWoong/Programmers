def solution(s):
    answer = list(s)
    return ''.join(sorted(answer, reverse=True))