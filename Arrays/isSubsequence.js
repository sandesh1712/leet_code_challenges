/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let arr = s.split("");
    
    for(let i=0;i<t.length;i++){
      if(arr.length > 0 && arr[0] === t[i])
        arr.shift();   
    }

    return arr.length == 0;
};

//https://leetcode.com/problems/is-subsequence/