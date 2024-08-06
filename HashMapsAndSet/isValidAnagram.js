/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length)
     return false;
    
    let map = new Map();
    
    //read all the character from s and store their count in map 
    for(i of s){ 
        let count = map.get(i)??0;
        map.set(i,++count);
    }
    
    //read all the character from T decrease the count 
     for(i of t){ 
        let count = map.get(i)??0;
        --count;
        if(count < 0)
         return false;
        map.set(i,count);
    }

    // check any char count is greater than 0
   return !![...map].filter(x=>x[1] > 0);
};

//https://leetcode.com/problems/valid-anagram/