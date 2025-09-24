'''
Linked List Cycle
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
If there is a cycle, return true. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true


'''

'''
Solution: Floyd's Tortoise and Hare (Cycle Detection)
 deterministic algorithm that uses two pointers to detect a cycle in a linked list.
Steps:
1. Initialize two pointers, slow and fast, both pointing to the head of the linked list.
2. Move the slow pointer one step at a time (slow = slow.next).
3. Move the fast pointer two steps at a time (fast = fast.next.next).
4. If there is no cycle, the fast pointer will eventually reach the end of the list (i.e., fast or fast.next will be None). In this case, return False.
5. If there is a cycle, at some point, the fast pointer will meet the slow
    pointer. In this case, return True.

'''

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def hasCycle(self, head:ListNode) -> bool:
        if not head:
            return False
        slow, fast = fast, head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False
    
    #find where the cycle begins
    def detectBeginingCycle(self, head:ListNode)-> ListNode:
        slow = head
        while slow != fast:
            slow = slow.next
            fast = fast.next
            return slow #the node where the cycle begins
        return None
