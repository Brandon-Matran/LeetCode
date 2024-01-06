def pair_product(numbers, target_product):
  d = {}
  for i in range(len(numbers)):
    neededNum = int(target_product / numbers[i])
    if neededNum in d:
      return [d[neededNum], i]
    else:
      d[numbers[i]] = i



print(pair_product([3, 2, 5, 4, 1], 8))
