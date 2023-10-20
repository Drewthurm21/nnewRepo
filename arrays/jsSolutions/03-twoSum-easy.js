/*
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
*/

//sort input & use pointers
const twoSum = (array, targetSum) => {
  let left = 0
  let right = array.length - 1

  array.sort((a, b) => a - b)

  while (left < right && array[left] + array[right] !== targetSum) {
    if (array[left] + array[right] < targetSum) left++
    else right--
  }

  return [left, right]
}

// console.log(twoSum([7, 1, 0, 3, 2, 4], 6)) // [2,4]
// console.log(twoSum([3, 3], 6)) // [0,1]
// console.log(twoSum([22, 1, 11, 2, 15, 81, 569, 3, 7], 9)) // [1,3]

//if you cannot mutate the input use a hash to track match indices
const twoSums = (array, targetSum) => {
  let matches = {}
  for (let i = 0; i < array.length; i++) {
    let num = array[i]
    if (targetSum - num in matches) return [matches[targetSum - num], i]
    matches[num] = i
  }
}

// console.log(twoSums([7, 1, 0, 3, 2, 4], 6)) //[4,5]
// console.log(twoSums([3, 3], 6)) //[0,1]
// console.log(twoSums([22, 1, 11, 2, 15, 81, 569, 3, 7], 9)) //[3,8]