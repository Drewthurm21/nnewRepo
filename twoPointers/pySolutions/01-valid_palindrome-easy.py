'''
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all 
non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters 
and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
'''
import re


def valid_palindrom(s):
    #remove special chars, spaces, and punctuation
    alpha_s = re.sub(r'[^A-Za-z0-9]+', '', s).lower()
    left = 0
    right = len(alpha_s) - 1

    while left <= right:
        if alpha_s[left] != alpha_s[right]:
            return False
        left += 1
        right -= 1

    return True


print(valid_palindrom("A man, a plan, a canal: Panama"))
