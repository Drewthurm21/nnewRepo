'''
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
 
Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
'''

from collections import Counter


def top_k_frequent_elements(nums, k):
    return [num for (num, _) in Counter(nums).most_common(k)]


def top_k_frequent_els(nums, k):
    frequencies = {}
    result = []

    for num in nums:
        if num in frequencies:
            frequencies[num] = frequencies[num] + 1
        else:
            frequencies[num] = 1

    frequencies = sorted(
        [(v, k) for k, v in frequencies.items()], reverse=True)

    for i in range(0, k):
        result.append(frequencies[i][1])

    return result


print(top_k_frequent_els([1, 1, 1, 1, 2, 2, 2, 3, 3], 2))
print(top_k_frequent_els([4, 1, -1, 2, -1, 2, 3], 2))
