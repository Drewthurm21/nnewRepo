'''
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
'''


def two_sum(nums, target):
    '''sort the input list and use pointers'''
    nums = sorted(nums)
    left = 0
    right = len(nums) - 1

    while left < right and nums[left] + nums[right] != target:
        if nums[left] + nums[right] < target:
            left = left + 1
        else:
            right = right - 1

    return [left, right]


# print(two_sum([7, 1, 0, 3, 2, 3], 6))  # [3,5]
# print(two_sum([3, 3], 6))  # [0,1]
# print(two_sum([22, 1, 11, 2, 15, 81, 569, 3, 7], 9))  # [1,3]


# hash map solution
def two_sums(nums, target):
    complement = {}
    for i, v in enumerate(nums):
        if v in complement:
            return [complement[v], i]
        else:
            complement[target - v] = i
    return -1


# print(two_sums([7, 1, 0, 3, 2, 3], 6))  # [3,5]
# print(two_sums([3, 3], 6))  # [0,1]
# print(two_sums([22, 1, 11, 2, 15, 81, 569, 3, 7], 9))  # [3,8]
