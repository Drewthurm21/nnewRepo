`
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
`

const findLongestSequence = (nums) => {
  //turn nums into a set to view as numberline
  const numSet = new Set(nums)
  let longest = 0

  for (let num of nums) {
    //skip if num has no left neighbor on the numberline
    if (numSet.has(num - 1)) continue;

    //if there's no left neighbor, check the length of the sequence
    let len = 0
    while (numSet.has(num + len)) len++;
    longest = Math.max(len, longest)
  }

  return longest
};

console.log(findLongestSequence([100, 4, 200, 1, 3, 2]))  // 4
console.log(findLongestSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))  // 9
