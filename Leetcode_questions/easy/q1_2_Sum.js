/**
2 Sum
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]



*/


 //logic 1
 /**
  * we can get the target to subtarct each interger  in the array
  * (lets call it a = target - nums[i]) 
  * to get nums[i] use a for loop
  * check if a exists in the array 
  * 
  */


 /**
  * @param {number[]} nums
  * @param {number} target
  * @return {number []}

 */


 
 function twosum(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const sum = target - nums[i];
        if (sum in map) {
            return [map[sum], i];
        }
        map[nums[i]] = i; // Store the current number and its index
    }
}


 /**
  * logic 2
  * loop through the array 
  * example [2,3,4,5] target =7
  * loop for i -take i = 0 ie 2
  * looop for j  loop through the whole array while adding them up
  *  [i] + [j] = target
  * 2 + 3= false, 2+4=6 false 2+5 = 7 true
  * return [i,j] 
  */

 var twoSum = function (nums,target){
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; i++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }

    }
 }

 var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) { // Start j from i + 1 to avoid using the same element twice
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
