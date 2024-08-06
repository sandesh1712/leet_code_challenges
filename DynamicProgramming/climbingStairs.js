/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let secondLast = last = ways =1;
    n--;
    while(n){
        ways = secondLast + last;
        secondLast = last;
        last = ways;
        n--;
    }
    return ways;
};


// https://leetcode.com/problems/climbing-stairs/