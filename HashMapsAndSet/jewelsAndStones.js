var numJewelsInStones = function(jewels, stones) {
    let map = new Map();
    
    for(i of jewels){
       map.set(i,true);
    }
    let count=0;
    for( i of stones){
       let isPresent = map.get(i);      
       if(!!isPresent)
        count++; 
    }
    return count;
};