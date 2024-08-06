/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let ballon = ['b','a','n','l','o'];
    
    let map = new Map();
    
    //count for all characters and store in map
    for(i of text){
        if(ballon.includes(i)){
            let count = map.get(i)??0;
            map.set(i,++count);
        }
    }
    
    // now find out minimun occurance of character in "balon"
    let min = text.length;
    ballon.forEach(x => {
        let currMin;
        let count = map.get(x)??0;
        
        if(x ==='l' || x ==='o'){
         currMin   = !!count ? Math.floor(count/2) : count;
        }else{
          currMin = count;
        }
       min = Math.min(currMin,min);
    });
    return min;
};

let text = "lloo";
console.log(maxNumberOfBalloons(text));

// https://leetcode.com/problems/maximum-number-of-balloons/