''' 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
'''


def containsDupes(nums):
    seen = {}
    for num in nums:
        if seen.get(num):
            return True
        seen[num] = True
    return False



def containsDuplicate(nums):
    return len(set(nums)) != len(nums)


print(containsDupes([1, 2, 3, 1]))  # t
print(containsDupes([1, 2, 3, 4]))  # f
print(containsDupes([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))  # t
print(containsDupes([1, 2, 5, 4343, 7, 8, 55, 87, 3]))  # f
print(containsDupes([0]))  # f
print(containsDupes([]))  # f
