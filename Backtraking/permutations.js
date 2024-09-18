/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    let isUsed = new Array(nums.length).fill(false);

    function backtrack(current){
        if(current.length === nums.length){
            result.push(current);
            return;
         }
                
        for(let i=0;i < nums.length ;i++){
          if(isUsed[i])
            continue;  
          
          current.push(nums[i]);
          isUsed[i] = true;
          
          backtrack([...current]);
          
          current.pop();
          isUsed[i] = false
        }
    }
    
    
    backtrack([],nums[0]);
    return result;
};