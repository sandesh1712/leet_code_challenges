/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let subString=[];
    let max=0;
    
    for(let i=0;i < s.length;i++){
      while(subString.includes(s[i])){
         subString.shift(); 
      }
      subString.push(s[i]);
      max = Math.max(max,subString.length);
    }
    return max;
};

//https://leetcode.com/problems/longest-substring-without-repeating-characters/