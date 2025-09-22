'''
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 
'''

'''
its simply an area  of a rectangle
Approach: Two Pointer
the idea is :
1. start with  the two furthest lines,  left and right
2. calculate the area
3. Move the poniter pointing to the shorter line in wards
'''

class Solution:
    def maxArea(self, height:  list[int]) -> int:
        i, j =  0, len(height)- 1 # i, j == left , right of the array 
        max_area  = 0
        
        while i < j:
            h = min(height[i], height[j]) # height of the rectangle is the minimum of the two lines
            w = j - i
            area = h * w
            max_area = max(max_area, area)


            # move the pointer pointing to the shorter line inwards
            if height[i] < height[j]:
                i += 1
            else:
                j -= 1

        return max_area
    

#lets use less variable names and have  a cleaner code
class Solution:
    def maxArea(self, height:  list[int]) -> int:
        l, r, max_area = 0, len(height)-1, 0
        while l < r:
            max_area = max(max_area, min(height[l], height[r] )* (r-l))
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        return max_area
                           
'''
time complexity: O(n)
space complexity: O(1)
'''

