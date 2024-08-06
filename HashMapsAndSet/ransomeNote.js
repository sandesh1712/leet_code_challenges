/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    
    for(i of magazine){
        let count = map.get(i)??0;
        map.set(i,++count);
    }

    for(i of ransomNote){
        let count = map.get(i)??0;
        if(!count)
          return false;
        map.set(i,--count);   
    }
    return true;
};

//https://leetcode.com/problems/ransom-note