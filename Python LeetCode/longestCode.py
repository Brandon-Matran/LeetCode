def runLengthEncoding(string):
    count = 1
    new_s = ""
    for i in range (len(string)-1):
        if string[i] != string[i+1] or count > 8:
            new_s += str(count) + string[i]
            count = 0
            count += 1

        else:
            count+=1
    new_s += str(count) + string[len(string)-count]


    print(new_s)


string = "AAAAAAAAAAAAABBCCCCDD"
print(runLengthEncoding(string))
