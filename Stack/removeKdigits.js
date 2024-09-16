/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if(num.length === k )
     return '0'

    let stk = [];
    
    for(let i=0;i<num.length;i++){
         while(k > 0 && stk.length > 0 && stk[stk.length-1] > num[i]){
             stk.pop();
             k--;
         }
        stk.push(num[i]);
    }

    while(k > 0){
        stk.pop();
        k--;
    }

    let result = stk.join('').replace(/^0+/,'');

    return result.length > 0 ? result :'0';
};

//https://leetcode.com/problems/remove-k-digits/description/?envType=problem-list-v2&envId=monotonic-stack