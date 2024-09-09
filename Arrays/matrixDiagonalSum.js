/**
 * @param {number[][]} mat
 * @return {number}
 */
export var diagonalSum = function(mat) {
    let sum=0;
    let n = mat.length;
    
    //primary diagonal
    let i=0;
    while(i < n){
      sum += mat[i][i];
      i++;
    }

    //secondary diagonal
    i=0;
    let j=n-1;
    while(i < n){
      sum += mat[i][j];
      i++;
      j--;
    }

    if(n%2){
      let k = Math.floor(n/2); 
      sum -= mat[k][k];
    }

    return sum;
}; 