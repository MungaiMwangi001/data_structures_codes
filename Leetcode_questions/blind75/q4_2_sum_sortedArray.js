
/**
 * Given a SORTED array and a target, return the indices of the 2 number that sum up target
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 * 
 * nums = [1,2,3,4,5] target= 9
 *         ^       ^
 *         |       |
 *       left      right
 
*/

//logic
// add the left and the right , if the sum > target decrement the right(right---)
// if the sum < target increment the left (left++);
//put the above in a  while loop


function twoSum(nums, target){
    let left = nums[0] 
    let right = length;
    let length = nums.length-1;

    while (left < right && right > 0 && left < length ){
        let sum = left + right;
        if(sum === target){
            return [left, target];            
        }
        
        // if (sum < target){left ++;}
        // else {right --;}
        //can be written as 
        if(sum > target){right-- ;}
        else{left++ ;}

    }
    return []
}

module.exports = twoSum;






  