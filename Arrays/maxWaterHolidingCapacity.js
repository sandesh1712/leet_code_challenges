/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length-1;
    let maxWaterCapacity = 0;

    while(start < end){
      const min = Math.min(height[start],height[end]);
      const horizontalDistance = end-start;
      const waterCapacity = min*horizontalDistance;
      maxWaterCapacity = Math.max(maxWaterCapacity,waterCapacity);

      if(min == height[end])
       end--;
      else
       start++; 
    }
    return maxWaterCapacity;  
};

