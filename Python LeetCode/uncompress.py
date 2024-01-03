def uncompress(s):

    numbers = '0123456789'
    res = []
    i = 0
    j = 0
    while j < len(s):
        if s[j] in numbers:
            j += 1
        else:
            num = int(s[i:j])
            res.append(num * s[j])
            j += 1
            i = j
    return "".join(res)





print(uncompress("2p1o5p"))
