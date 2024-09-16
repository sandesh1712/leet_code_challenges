/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length === 1)
      return true;
    
    let end = nums[0]; 
    
    let i=0;
    
    while(i <= end){
        let currReach = i+nums[i];
        
        if(currReach >= nums.length-1)
         return true;
        
        end = Math.max(end,currReach);
        i++;
    }

    return false;
};

//https://leetcode.com/problems/jump-game/