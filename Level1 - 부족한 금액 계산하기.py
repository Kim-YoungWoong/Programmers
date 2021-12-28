def solution(price, money, count):
    answer = -1
    priceSum = 0

    for i in range(1, count + 1):
        priceSum += price * i

    if priceSum > money:
        answer = priceSum - money
    else:
        answer = 0

    return answer