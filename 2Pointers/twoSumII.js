/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export var twoSum = function(numbers, target) {
    let start = 0;
    let end=numbers.length-1;
    while(start < end){
      let num = numbers[start] + numbers[end];
      
      if(num === target)
       break;

      if(num < target)
        start++;

      if(num > target)
         end--;
      
    }
    return [start+1,end+1];
};

//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/