def solution(name):
    answer = 0
    n = [min(ord(i) - ord('A'), ord('Z') - ord(i) + 1) for i in name]
    pos = 0

    while True:
        answer += n[pos]
        n[pos] = 0

        if sum(n) == 0: break

        left, right = 1, 1
        while n[pos - left] == 0:
            left += 1
        while n[pos + right] == 0:
            right += 1

        if left >= right:
            pos += right
            answer += right
        else:
            pos -= left
            answer += left

    return answer