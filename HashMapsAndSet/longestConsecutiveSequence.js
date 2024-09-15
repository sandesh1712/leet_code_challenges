/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);

    let maxCount = 0;

    for(let i=0;i < nums.length;i++){
        let prevNum = nums[i]-1;        
        if(!set.has(prevNum)){
            let currNum = nums[i];
            let count = 0;
            while(set.has(currNum)){
               currNum++;
               count++;
            }
            maxCount = Math.max(maxCount,count);
        }
    }
    
    return maxCount;
};

//https://leetcode.com/problems/longest-consecutive-sequence/description/