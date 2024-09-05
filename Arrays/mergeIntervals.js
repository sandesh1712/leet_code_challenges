/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0)
      return [];
     
    intervals.sort((a,b)=>a[0]-b[0]);

    let arr = [];
    
    let [start,end] = intervals[0] ;
    
    for(let i=1;i < intervals.length ;i++){
        let [currStart,currEnd] = intervals[i];
        
        if(currStart <= end)
          end = Math.max(currEnd,end);
        else{
           arr.push([start,end]);
           start = currStart;
           end = currEnd; 
        }  
    }
    arr.push([start,end]);
    return arr;
};

//https://leetcode.com/problems/merge-intervals/