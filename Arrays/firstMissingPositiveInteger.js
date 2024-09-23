/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;

    for(let i=0;i < n;i++){
        let num = nums[i];
        while(nums[i] < n && nums[i] > 0 && nums[nums[i] - 1] !== nums[i]){
           let temp = nums[nums[i]-1]; 
           nums[nums[i]-1] = nums[i];
           nums[i] = temp;
        }
    }

    for(let i=0;i<n;i++){
        if(i+1 != nums[i])
         return i+1;
    }    
    return n+1;
};
//https://leetcode.com/problems/first-missing-positive/