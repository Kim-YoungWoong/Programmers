#!/usr/bin/env python
# coding: utf-8

# In[ ]:


def solution(numbers):
    a = []

    for i in range(0, len(numbers)):
        for j in range(i+1, len(numbers)):
            a.append(numbers[i]+numbers[j])

    s = set(a)

    return list(sorted(s))

