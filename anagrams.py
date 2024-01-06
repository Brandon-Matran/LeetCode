def anagrams(s1, s2):
  d1 = {}
  for c in s1:
    if c not in d1:
      d1[c] = 1
    else:
      d1[c] += 1
  for c in s2:
    if c not in d1:
      return False
    else:
      d1[c] -= 1
  print(d1)

  for items in d1.values():
    if items != 0:
      return False
    continue
  return True







print(anagrams('taxi', 'tax'))
