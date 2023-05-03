from collections import Counter

class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        count, s1_length = Counter(s1), len(s1)

        for i in range(len(s2)):
            if s2[i] in count:
                count[s2[i]] -= 1
            if i >= s1_length and s2[s1_length-i] in count:
                count[s2[i-s1_length]] += 1
            if all(value == 0 for value in count.values()):
                return True
        return False


s1 = "ab"
s2 = "eidboaoo"

sol = Solution()
print(sol.checkInclusion(s1, s2))
