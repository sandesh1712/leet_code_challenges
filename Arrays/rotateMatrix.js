/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {                            
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

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix);