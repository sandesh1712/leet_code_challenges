/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let arr = new Array(temperatures.length);
    
    let stk = [];
    
    let i=1;
    stk.push(0);

    while(i < temperatures.length){   
      while(temperatures[i] > temperatures[stk.at(-1)]){
         let top = stk.at(-1);
         let diff = i - top;
         arr[stk.pop()] = diff; 
      }
      stk.push(i++);
    }

    while(stk.length > 0){
      let i = stk.pop();
      arr[i] = 0;
    }
    return arr;
};

// https://leetcode.com/problems/daily-temperatures/