'''
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
'''


def find_longest_sequence(nums):
    nums_set = set(nums)
    longest = 1
    for num in nums:
        length = 0
        if num - 1 not in nums_set:
            while num + length in nums_set:
                length += 1
            longest = max([length, longest])
    return longest


print(find_longest_sequence([100, 4, 200, 1, 3, 2]))  # 4
print(find_longest_sequence(
    [0, 3, 7, 2, 5, 8, 4, 6, 0, 1, 201, 202, 203]))  # 9
