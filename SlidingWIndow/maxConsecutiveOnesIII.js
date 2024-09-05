/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  if(k >= nums.length)
       return nums.length;

  let start = 0;   
  let max = 0;
  let zeroCount=0;

  for (let i = 0; i < nums.length; i++) {
      if(nums[i]===0){
        zeroCount++;
      }

      while(zeroCount > k){
          if(nums[start]===0){
              zeroCount--;
          }
          start++;
      }

      max = Math.max(max,i-start+1);
      
  }

return max;
};

//https://leetcode.com/problems/max-consecutive-ones-iii/description/