# def compress(s):
#     d = {}
#     newS = ''

#     for i in range(len(s)):
#         if s[i] not in d:
#             d[s[i]] = 1
#         else:
#             d[s[i]] += 1
#     print(d)

#     for item in d.keys():
#         if d[item] != 1:
#             newS += str(d[item]) + item
#         else:
#             newS += item
#     return newS



# print(compress('ppoppppp'))


def compress(s):
    s += '!'
    i = 0
    j = 0
    result = []
    while j < len(s):
        if s[i] == s[j]:
            j += 1
        else:
          if j-i == 1:
            result.append(s[i])
          else:
            result.append(s[j-i])
            result.append(s[i])
        i = j
    return ''.join(result)



print(compress('ccaaatsss'))
print(compress('ppoppppp'))

            # 0 1 2 3 4 5 6 7 8
