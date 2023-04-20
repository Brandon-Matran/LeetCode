
def threeSum(nums):
    result = []
    n = sorted(nums)
    for i in range(len(n)):
        if n[i] > 0:
            break
        if n[i] == n[i-1] and i > 0:
            continue

        l = i + 1
        r = len(n)-1
        while l < r:
            sum = n[i] + n[l] + n[r]
            if sum == 0:
                result.append([n[i], n[l], n[r]])
                l += 1
                r -= 1
                while l < r and n[l] == n[l-1]:
                    l += 1
                while l < r and n[r] == n[r+1]:
                    r -= 1
            elif sum < 0:
                l += 1
            else:
                r -= 1
    return result

nums = [-2,0,0,2,2]
print(threeSum(nums))
