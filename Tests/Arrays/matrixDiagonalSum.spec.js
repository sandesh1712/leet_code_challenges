import {diagonalSum} from '../../Arrays/matrixDiagonalSum'

describe("Check if Every Row and Column Contains All Numbers",()=>{
  const samples = {
     first: [[1,2,3],[4,5,6],[7,8,9]],
     second: [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],
     third: [[5]]
  }

  const results = {
    first : 25,
    second: 8,
    third: 5
  }
    
   it.each(Object.keys(samples))
   ("Should return exact result",(key)=>{
       const sample = samples[key];
       const result = results[key];
       const actual = diagonalSum(sample);
       expect(actual).toEqual(result);
   });
});


