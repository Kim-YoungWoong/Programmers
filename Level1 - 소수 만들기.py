from itertools import combinations

def primeCheck(num):
    for i in range(2,int(num**0.5)+1):
        if num % i == 0:
            return False
    return True

def solution(nums):
    answer = 0
    combi = list(combinations(nums, 3))
    for i in combi:
        if primeCheck(sum(i)):
            answer+=1

    return answer