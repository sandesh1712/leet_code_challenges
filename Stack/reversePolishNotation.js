/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stk = [];

    let math = {
        '+': (a,b)=>a+b,
        '-':(a,b)=>a-b,
        '/':(a,b)=>Math.floor(a/b),
        '*':(a,b)=>a*b,
    }

    stk.push(Number(tokens[0]));
    let i=1;
    
    let signs = Object.keys(math);
    
    while(i < tokens.length){
     if(signs.includes(tokens[i])){
        let second = stk.pop();
        let first = stk.pop();
        let x = math[tokens[i]](first,second);
        stk.push(x);
     }
     else
       stk.push(Number(tokens[i]));
     i++;  
    } 
   return stk.pop();
};

//https://leetcode.com/problems/evaluate-reverse-polish-notation/description/