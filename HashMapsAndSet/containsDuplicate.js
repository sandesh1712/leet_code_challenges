/**
 * @param {number[]} nums
 * @return {boolean}
 */
export var containsDuplicate = function(nums) {
    let set = new Set();
    let prevSize = set.size;
    for(i of nums){
        set.add(i);
        if(prevSize === set.size)
          return true;
        prevSize = set.size;  
    }
    return false;
};