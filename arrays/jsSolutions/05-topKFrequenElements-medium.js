/*
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
*/

const topKFrequentElements = (nums, k) => {
  if (k < 2) return nums
  const counter = new Map()
  const result = []

  for (const num of nums) counter.set(num, counter.get(num) + 1 || 1)
  const pairs = [...counter.entries()].sort((a, b) => b[1] - a[1])

  let i = 0
  while (i < k) {
    result.push(pairs[i][0]);
    i++
  }

  return result
}

console.log(topKFrequentElements([1, 1, 1, 2, 2, 3], 2))