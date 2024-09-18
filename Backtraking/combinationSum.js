/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];

    function backtrack(current,sum,start){
         if(sum === target){
            result.push([...current]); 
            return;
         }

         if(sum > target)
          return;  
         
         for(let i=start; i < candidates.length;i++){
             current.push(candidates[i]);
             backtrack(current,sum+candidates[i],i); 
             current.pop();
         }    
    }
    backtrack([],0,0);
    return result;
};