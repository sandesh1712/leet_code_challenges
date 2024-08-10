/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export const rotate = function(matrix) {                            
    let n = matrix[0].length;
    
    //swap digonaly
    for(let i=0;i<n;i++){
      for(let j=i;j<n;j++){
          let temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;
      }
    }                                                                      
     
     //now reverse
     for(let i=0;i<n;i++){
        matrix[i].reverse(); 
     }
     
     return matrix;
};
