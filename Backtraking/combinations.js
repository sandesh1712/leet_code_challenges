/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = []; 
 
    function backtrack(current,num){
        if(current.length === k){
           result.push(current);
           return;
        }
 
        for(let i = num;i <= n;i++){
           current.push(i);
           backtrack([...current],i+1)
           current.pop();
        }
    }
    
    backtrack([],1)
    return result;
 };