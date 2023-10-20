'''
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
'''


def three_sum(nums):
    nums.sort()
    res = {}
    end = len(nums) - 1

    for i in range(0, end):
        l = i+1
        r = end

        while l < r:
            numset = [nums[i], nums[l], nums[r]]
            if sum(numset) == 0:
                res[str(numset)] = numset
                pass
            if sum(numset) < 0:
                l += 1
            else:
                r -= 1

    return list(res.values())


nums = [-1, 0, 1, 2, -1, -4]
print(three_sum(nums))
nums2 = [0, 0, 0, 0]
print(three_sum(nums2))
nums3 = [-2, 0, 1, 1, 2]
print(three_sum(nums3))
nums4 = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]
print(three_sum(nums4))
