'''
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
'''


def trap_rain_water(heights):
    maxL = maxR = l = minH = water = 0
    r = len(heights) - 1

    while l <= r:
        maxL = max(maxL, heights[l])
        maxR = max(maxR, heights[r])
        minH = min(maxL, maxR)

        if maxL <= maxR:
            water += minH - heights[l] if heights[l] < minH else 0
            l += 1
        else:
            water += minH - heights[r] if heights[r] < minH else 0
            r -= 1

    return water


print(trap_rain_water([4, 2, 0, 3, 2, 5]))  # 9
print(trap_rain_water([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))  # 6
