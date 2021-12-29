def solution(a, b):
    answer = 0
    day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for i in range(len(month)):
        if a - 1 == i:
            answer += b - 1
            break
        answer += month[i]
    answer = answer % 7

    return day[answer]