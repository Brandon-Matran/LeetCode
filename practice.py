def search(nums, target):

    for i in range(len(nums)-1):
        if nums[i] == target:
            return i
        

nums = [5]
target = 5
print(search(nums, target))
