/**
 * @param {number[]} height
 * @return {number}
 */
export var trap = function(height) {
    let n = height.length-1;

    let leftMax = new Array(n+1);
    
    let rightMax = new Array(n+1);
     
    leftMax[0] =  height[0];
    rightMax[n] = height[n];

    for(let i=1;i <= n;i++){
        leftMax[i] = Math.max(height[i],leftMax[i-1])
        rightMax[n-i] = Math.max(height[n-i],rightMax[n-i+1]) 
    }

    let totalTappedWater=0;
    for(let i=0;i<n;i++){
        let min = Math.min(leftMax[i],rightMax[i]);
        totalTappedWater += (min - height[i]);
    }
    return totalTappedWater;
};

// https://leetcode.com/problems/trapping-rain-water/
// this uses O(n) space complexity another way to solve this is 2 pointer technique