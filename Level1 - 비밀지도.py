# arr1, arr2을 2진수로 변환해서 저장하는 함수
def convert(n, arr, result):
    for i in range(n):
        result.append(bin(arr[i]))
        result[i] = result[i][2:]
        while len(result[i]) != n:
            result[i] = '0' + result[i]

    return result


def solution(n, arr1, arr2):
    answer = []
    bin1, bin2 = [], []
    newList = []
    # 1. arr1, arr2을 2진수로 변환해서 저장
    convert(n, arr1, bin1)
    convert(n, arr2, bin2)
    # 2. arr1, arr2 각 원소끼리 비교해서 둘다 0인것 빼고 1로 바꿔서 새로운 배열에 저장
    for i in range(len(bin1)):
        oneline = ''
        for j in range(len(bin1)):
            if bin1[i][j] == '0' and bin2[i][j] == '0':
                oneline += '0'
            else:
                oneline += '1'
        newList.append(oneline)
    # 3. 1은 #으로 0은 공백으로 바꿔서 출력
    for i in newList:
        oneline = ''
        for j in i:
            if j == '1':
                oneline += '#'
            else:
                oneline += ' '
        answer.append(oneline)

    return answer