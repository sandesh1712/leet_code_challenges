/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let set = new Set(nums); 
    
     let sum = nums[0];
    
     for(let i=1;i < nums.length;i++){
         if(nums[i-1] === nums[i]-1)
           sum += nums[i];
         else
          break;  
     }
  
     while(set.has(sum)){
       sum++;
     }
     return sum;
};

//https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/description/