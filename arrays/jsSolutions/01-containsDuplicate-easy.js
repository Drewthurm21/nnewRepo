/* 
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
*/

const containsDuplicate = (nums) => {
  if (nums.length < 2) return false

  let seenNumbers = new Set()

  for (let num of nums) {
    if (seenNumbers.has(num)) return true
    seenNumbers.add(num)
  }

  return false
}


console.log(containsDupes([1, 2, 3, 1])) //t
console.log(containsDupes([1, 2, 3, 4])) //f
console.log(containsDupes([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) //t
console.log(containsDupes([1, 2, 5, 4343, 7, 8, 55, 87, 3])) //f
console.log(containsDupes([0])) //f
console.log(containsDupes([])) //f