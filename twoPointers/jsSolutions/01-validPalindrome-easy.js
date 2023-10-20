/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all 
non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters 
and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/


const validPalindrome = (str) => {
  let ns = str.replace(/[^a-z0-9]/gi, '')
  let left = 0
  let right = ns.length - 1

  while (left <= right) {
    if (ns[left].toLowerCase() !== ns[right].toLowerCase()) return false
    left++
    right--
  }

  return true
}

console.log(validPalindrome("A man, a plan, a canal: Panama"))
