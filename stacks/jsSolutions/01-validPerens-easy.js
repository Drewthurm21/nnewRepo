`
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
`
const validPerentheses = (st) => {

  const stack = []
  const chars = { '}': '{', ']': '[', ')': '(' }

  for (const char of st) {
    if (chars[char] && chars[char] === stack[stack.length - 1]) stack.pop()
    else stack.push(char)
  }

  return stack.length === 0
}

console.log(validPerentheses("()"))
console.log(validPerentheses("()[]{}"))
console.log(validPerentheses("({[]})"))
console.log(validPerentheses("({}"))
console.log(validPerentheses("(()])"))
console.log(validPerentheses("([()]{}{})"))
