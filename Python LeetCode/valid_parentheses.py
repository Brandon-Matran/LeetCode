class Solution:
    def isValid(self, s: str) -> bool:
        d = {
           "]": "[" ,
           "}": "{",
           ")": "("
        }
        stack = []
        for c in s:
            if c in d:
                value = stack.pop()
                if value != d[c]:
                    return False
                else:
                    continue
            else:
                stack.append(c)
        return not stack

s = "(([]{}"
sol = Solution()
print(sol.isValid(s))
