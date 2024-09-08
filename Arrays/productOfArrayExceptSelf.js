/**
 * @param {number[]} nums
 * @return {number[]}
 */
export var productExceptSelf = function(nums) {
    let prefix = new Array(nums.length).fill(1);
    let suffix = new Array(nums.length).fill(1);
    let end = nums.length-1; 
    
    for(let i=1;i < nums.length;i++){
       prefix[i] = prefix[i-1]*nums[i-1];
       suffix[end-i] = suffix[end-i+1]*nums[end-i+1]; 
    }
    
    for(let i=0;i < nums.length;i++){
      prefix[i] *= suffix[i]; 
    }
    
    return prefix;
};