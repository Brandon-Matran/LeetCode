class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        new_s = set()
        l = 0
        res = 0
        for r in range(len(s)):
            while s[r] in new_s:
                new_s.remove(s[l])
                l+=1
            new_s.add(s[r])
            res = max(res, len(new_s))
        return res








# s = "abcabcbb"
s = "pwwkew"
sol = Solution()
print(sol.lengthOfLongestSubstring(s))
