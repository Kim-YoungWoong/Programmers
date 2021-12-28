def solution(s):
    n = int(len(s)/2)
    if len(s)%2!=0:
        return s[n]
    else:
        return ''.join(s[n-1]+s[n])