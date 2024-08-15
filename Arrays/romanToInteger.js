/**
 * @param {string} s
 * @return {number}
 */
export var romanToInt = function(s) {
    let map = new Map();

    map.set("I",1);
    map.set("V",5);
    map.set("X",10);
    map.set("L",50);
    map.set("C",100);
    map.set("D",500);
    map.set("M",1000);
     
    let second = s.length-1;
   
    let first = second-1;
    
    let sum = map.get(s[second]);

    while(first >= 0){
        let num1 = map.get(s[first]);

        let num2 = map.get(s[second]);
        
        if(num2 > num1){
         sum -= num1;
        }else
         sum += num1;
          
        first--;
        second--;
    }
    return sum;
};

//https://leetcode.com/problems/roman-to-integer/description/