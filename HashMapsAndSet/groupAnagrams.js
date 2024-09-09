/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();

    for(let i = 0;i < strs.length ;i++){
        let temp = strs[i].split('').sort().join('');
        let val = map.get(temp) ?? [];
        val.push(strs[i]);
        map.set(temp,val);
    }

    return [...map.values()];
};

//https://leetcode.com/problems/group-anagrams/