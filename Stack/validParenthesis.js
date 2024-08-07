/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = new Map();
    map.set("(",")");
    map.set("[","]");
    map.set("{","}");
     
    let stk = [];
    stk.push(s[0]);
    let i=1;
    while(i < s.length){
       let k = stk.at(-1);
       let l = map.get(k);
        if((s[i] === '}' || s[i] === ')' || s[i] === ']') && (l === s[i])){
              stk.pop();  
        }else{
           stk.push(s[i]); 
        }
        i++;
    }
    
    return stk.length==0; 
};

// https://leetcode.com/problems/valid-parentheses