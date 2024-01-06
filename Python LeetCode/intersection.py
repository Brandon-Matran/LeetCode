def intersection(a, b):
  if a == b:
    return a
  answerArray = []
  if len(a) < len(b):
    minArray = a
    maxArray = b
  else:
    minArray = b
    maxArray = a
  for num in maxArray:
    if num in minArray:
      answerArray.append(num)
  return answerArray


a = [ i for i in range(0, 50000) ]
b = [ i for i in range(0, 50000) ]
print(intersection(a, b))
