/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let arr = [0,1];
    
    if( n==0 || n==1 )
    return arr[n];
    
    let i=1;
    
    while(i<n){
        let num = arr[i] + arr[i-1];
        arr.push(num);
        i++;
    }

    return arr[i];
};

// https://leetcode.com/problems/fibonacci-number/

console.log(fib(3));