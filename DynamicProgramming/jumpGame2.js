/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length ==1 )
     return 0;  
    let farthest = 0;
    let jump = 0;
    let end = 0;
     
     for(let i=0;i<nums.length;i++){
       farthest = Math.max(farthest,i+nums[i]);
       
       if(i === end){
          jump++;
          end = farthest;
       }
   
       if(end >= nums.length-1){
           break;
       }
     }
    return jump;
};