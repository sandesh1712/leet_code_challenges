/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
export var checkValid = function(matrix) {
    let i=0;
    let n = matrix.length
    while(i < n){
       //check row
       let map = new Map();
       let j=0;
       while(j < n){
          let num = matrix[i][j];
          let index = map.get(num) >= 0;
          if( index || num > n || num < 1){
              return false;
          }
          map.set(num,true);
          j++;
       }
  
       //check column
       map = new Map();
       j=0;
       while(j < n){
          let num = matrix[j][i];
          let index = map.get(num);
          if( index || num > n || num < 1){
              return false;
          }
          map.set(num,true);
          j++;
       }
      i++;
    }
    return true;
};
  
//https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/
