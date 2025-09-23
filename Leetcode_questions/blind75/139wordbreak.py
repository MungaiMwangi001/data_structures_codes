"""
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

"""
'''
approach: backtracking + memoization
 backtracking: we will try to break the string from every index and check if the substring is in the wordDict
 memoization: we will store the result of each index in a dictionary to avoid recomputing

steps:
1. create a set of words from the wordDict for O(1) lookup
2. create a memo dictionary to store the result of each index
3. create a dfs function that takes an index as input
4. if the index is equal to the length of the string, return True
5. if the index is in the memo dictionary, return the value 
6. iterate through the string from the current index to the end of the string
    a. if the substring from the current index to the current index + j is in the wordSet and the dfs function returns True for the current index + j, return True
7. if no valid segmentation is found, store False in the memo dictionary for the current index  
for the current index and return False


'''

class Solution:
    def wordBreak(self, s, wordDict):
        wordSet, memo = set(wordDict), {}

        def dfs(i):
            if i == len(s): return True
            if i in memo: return memo[i]
            memo[i] = any(s[i:j] in wordSet and dfs(j) for j in range(i+1, len(s)+1))
            return memo[i]

        return dfs(0)
