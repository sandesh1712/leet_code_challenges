/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    
    function backtrack(current,index){
        
        if(current.length <= nums.length ){
           result.push(current);
        }

        while(index < nums.length){
            current.push(nums[index]);
            index++;
            backtrack([...current],index);
            current.pop();
        }

    }
   
   backtrack([],0);
   return result;
};

//https://leetcode.com/problems/subsets/description/