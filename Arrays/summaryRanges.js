/**
 * @param {number[]} nums
 * @return {string[]}
 */
export var summaryRanges = function(nums) {
    
    if(nums.length == 0)
      return [];

    let result = [];
    let start = nums[0];
    let end = nums[0];

    for(let i=1;i<nums.length;i++){      
       if(end+1 === nums[i]){
         end = nums[i];
       }else{
           result.push(start !== end ? `${start}->${end}` : `${start}`); 
            start = nums[i];
            end = nums[i];
       }
    }
    result.push(start !== end ? `${start}->${end}` : `${start}`); 
    return result; 
};