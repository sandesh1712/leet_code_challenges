var longestCommonPrefix = function(strs) {
    let smallestWord;
    
    strs.forEach(x =>{
        smallestWord = !smallestWord || smallestWord.length > x.length ? x : smallestWord;
    } )

    let commonPrefix = '';
    
    for(let i=0;i<smallestWord.length;i++){
       for(let j=0;j<strs.length;j++){
          if(strs[j][i] !== smallestWord[i])
            return commonPrefix;
       }
       commonPrefix += smallestWord[i];    
    }

    return commonPrefix;
};

//https://leetcode.com/problems/longest-common-prefix/description/