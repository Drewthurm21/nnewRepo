/*
Given n non-negative integers representing an elevation map where the width of each bar is 
1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: img https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png
The above elevation map (black section) is represented by array 
[0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are 
being trapped. 

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
*/


const trapRainWater = (heights) => {
  let maxL = 0, maxR = 0, left = 0, totalWater = 0, min = 0
  let right = heights.length - 1

  while (left <= right) {
    maxL = Math.max(maxL, heights[left])
    maxR = Math.max(maxR, heights[right])
    min = Math.min(maxL, maxR)

    if (maxL <= maxR) {
      if (min - heights[left] > 0) totalWater += min - heights[left]
      left++
    } else {
      if (min - heights[right] > 0) totalWater += min - heights[right]
      right--
    }
  }

  return totalWater
};

console.log(trapRainWater([4, 2, 0, 3, 2, 5])) // 9
console.log(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6
