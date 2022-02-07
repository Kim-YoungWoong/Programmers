def solution(n):
    i = 1
    n_b = format(n, 'b')
    n_b_cnt = str(n_b).count('1')

    while True:
        temp = format(n+i, 'b')
        temp_cnt = str(temp).count('1')
        if n_b_cnt == temp_cnt:
            return n+i
        i+=1