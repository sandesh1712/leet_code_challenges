/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let lowK = 1;
   
    let maxK=0;
    
    for(let i of piles){
       if(maxK < i)
        maxK = i; 
    }
  
    if(piles.length === h)
     return maxK;
  
    let k = lowK; 
    
    while(lowK < maxK){
      let totalHours = 0;
      k = Math.floor((lowK+maxK)/2);
      for(let i of piles ){
         totalHours += Math.ceil(i/k);
      }
      if(totalHours <= h){
        maxK = k;
      }
      if(totalHours > h){
          lowK = k+1;
      }
    }
    return lowK;
};

//https://leetcode.com/problems/koko-eating-bananas/