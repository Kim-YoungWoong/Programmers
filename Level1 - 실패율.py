def solution(N, stages):
    stageDic = {}
    challenge = len(stages)

    # N의 갯수만큼 돌리기
    for i in range(1, N+1):
        # 클리어하지 못한 스테이지 카운트
        count = stages.count(i)
        # 실패한 사람이 없으면 실패율 0
        if count == 0:
            lose = 0
        # 실패율 계산
        else:
            lose = count/challenge
        # 딕셔너리에 스테이지 번호와 실패율 넣고 도전횟수에서 실패한 사람 빼기
        stageDic[i] = lose
        challenge-=count
    # 딕셔너리의 실패율순으로 내림차순 후 스테이지 번호 출력
    return sorted(stageDic, key=lambda x: stageDic[x], reverse=True)