from collections import deque

def solution(s):
    stack = []
    s = deque(list(s))
    while s:
        stack.append(s.popleft())
        if len(stack)>1:
            if stack[-1] == ')' and stack[-2] == '(':
                stack.pop()
                stack.pop()
    if not stack:
        return True
    else:
        return False