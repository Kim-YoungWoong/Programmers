#!/usr/bin/env python
# coding: utf-8

# In[ ]:


def solution(strings, n):
    answer = []
    
    for i in range(len(strings)):
        strings[i] = strings[i][n]+strings[i]
    strings.sort()    
    
    for i in range(len(strings)):
        strings[i] = strings[i][1:]
        answer.append(strings[i])
    
    return answer

