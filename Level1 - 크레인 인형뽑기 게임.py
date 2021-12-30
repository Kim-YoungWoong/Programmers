def solution(board, moves):
    # 무브배열숫자대로 보드의 열을 움직임
    # 그 열에서 0이 아닌 숫자가 나올때까지 내려감
    # 찾으면 바구니배열에 그 숫자를 저장하고 숫자가 있는 자리는 0으로 바꿈
    # 반복
    # 바구니 배열에 같은 숫자가 저장되면 두 숫자 모두 삭제하고 result+=1
    answer = 0
    bucket = []
    for i in moves:
        for j in range(len(board)):
            if board[j][i-1] != 0:
                bucket.append(board[j][i-1])
                board[j][i-1] = 0
                break
        for k in range(0, len(bucket)-1):
            if bucket[k] == bucket[k+1]:
                bucket.pop()
                bucket.pop()
                answer+=2

    return answer