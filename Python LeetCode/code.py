def breakout_room(code, message):
    code_length = len(code)
    count = 0

    start = 0
    end = 0
    while end < len(message):
        if message[end] == code[start]:
            start += 1
            end += 1
            if start == code_length:
                count += 1
                start = 0
        else:
            end += 1
    return count








code= "ASDF"
message="SODIFJOSDIFJASOIDFASLWEARWOERIMSOEIDENRMFASD"

print(breakout_room(code, message))
