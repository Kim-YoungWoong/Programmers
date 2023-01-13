from collections import defaultdict

def calculate(dic):
  minV = 100000
  maxV = 0
  for i in dic:
    for j in range(len(dic[i])-K+1):
      length = dic[i][j+K-1]-dic[i][j] + 1
      minV = min(minV, length)
      maxV = max(maxV, length)
  return (minV, maxV)

T = int(input())
for _ in range(T):
  W = input()
  K = int(input())
  dic = defaultdict(list)
  for i in range(len(W)):
    if W.count(W[i]) >= K:
      dic[W[i]].append(i)
  if not dic:
    print(-1)
  else:
    print(*calculate(dic))