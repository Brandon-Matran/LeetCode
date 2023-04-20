# class Solution:
#     def maxArea(self, height: list[int]) -> int:
#         length = len(height) - 1
#         left = 0
#         right = length
#         maxArea = 0

#         while left < right:
#             maxArea = max(maxArea, (right - left) * min(height[left], height[right]))
#             if height[left] < height[right]:
#                 left += 1
#             else:
#                 right -= 1
#         return maxArea

# height = [1,8,6,2,5,4,8,3,7]
# sol = Solution()
# print(sol.maxArea(height))

##faster solution

class Solution:
    def maxArea(self, height: list[int]) -> int:
        left, right, maxWidth, area = 0, len(height) - 1, len(height) - 1, 0

        for width in range(maxWidth, 0, -1):
            if height[left] < height[right]:
                area = max(area, height[left] * width)
                left += 1
            else:
                area = max(area, height[right] * width)
                right -= 1
        return area


height = [1,8,6,2,5,4,8,3,7]
sol = Solution()
print(sol.maxArea(height))
