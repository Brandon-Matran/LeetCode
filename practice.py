

def productExceptSelf(nums):
    res = []
    left_side = [0] * len(nums)
    right_side = [0] * len(nums)

    left_side[0] = 1
    right_side[-1] = 1
    for i in range(1, len(nums)):
        left_side[i] = left_side[i - 1] * nums[i - 1]
        print("LEFT", left_side)
        right_side[len(nums) - i - 1] = right_side[len(nums)- i] * nums[len(nums) - i]
        

    for i in range(len(nums)):
        res.append(left_side[i] * right_side[i])
    return res

nums = [1,2,3,4]
print(productExceptSelf(nums))
