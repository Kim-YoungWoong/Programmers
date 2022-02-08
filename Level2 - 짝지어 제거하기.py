def solution(s):
    stack = []
    s = list(s)
    while s:
        stack.append(s.pop())
        if len(stack)>1:
            if stack[-1]==stack[-2]:
                stack.pop()
                stack.pop()
    if not stack:
        return 1
    else:
        return 0