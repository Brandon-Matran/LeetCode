class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        if len(nums) == 0:
            return 0

        s = set()
        for i in range(0, len(nums)-1):
            if nums[i] + 1 == nums[i + 1]:
                s.add(nums[i])
            else:
                continue
        return len(s)
nums = [1, 2, 3, 4, 100, 200]
solution = Solution()
print(solution.longestConsecutive(nums))


#previous commit
