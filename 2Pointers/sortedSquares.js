/**
 * @param {number[]} nums
 * @return {number[]}
 */
export var sortedSquares = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let arr = [];
    let index = end;
    while(start <= end){
       let startSquare = Math.pow(nums[start],2);
       let endSquare = Math.pow(nums[end],2); 
      if(startSquare > endSquare){
        arr[index] = startSquare;
        start++;
      }else{
        arr[index] = endSquare;
        end--;
      }
      index--;     
    }
    return arr;
};
