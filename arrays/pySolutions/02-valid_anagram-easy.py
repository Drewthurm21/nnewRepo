'''
Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a 
word or phrase formed by rearranging the letters of a different word or phrase, typically using all 
the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters ? How would you adapt your solution to such a case?
'''


def is_anagram(s, t):
    return sorted([l for l in s]) == sorted([l for l in t])

# print(is_anagram('anagram', 'nagaaram'))


# dictionary counter solution
def valid_anagram(s, t):
    if len(s) != len(t):
        return False

    c = {letter: s.count(letter) for letter in s}
    keys = c.keys()

    for letter in t:
        if letter in keys:
            if c[letter] == 0:
                return False
            else:
                c[letter] = c[letter] - 1

    return sum(c.values()) == 0

# print((valid_anagram("nagaram", "anagram")))


# array buckets solution
def valid_anagrams(s, t):
    if len(s) != len(t):
        return False
    letters = [0 for i in range(26)]

    for char in s:
        i = ord(char) - 97
        letters[i] = letters[i] + 1

    for char in t:
        i = ord(char) - 97
        if letters[i] == 0:
            return False
        letters[i] = letters[i] - 1

    return sum(letters) == 0

# print((valid_anagrams("nagaram", "anagram")))


# unicode solution
def valid_anagram_unicode(s, t):
    if len(s) != len(t):
        return False
    letters = [0 for i in range(26)]
    s = [int(num) for num in s.split(',')]
    t = [int(num) for num in t.split(',')]

    for char in s:
        i = char - 97
        letters[i] = letters[i] + 1

    for char in t:
        i = char - 97
        if letters[i] == 0:
            return False
        letters[i] = letters[i] - 1

    return sum(letters) == 0

# print(valid_anagram_unicode('110,97,103,97,114,97,109', '97,110,97,103,97,114,109'))
