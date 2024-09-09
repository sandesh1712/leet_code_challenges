import {checkValid} from '../../Arrays/checkEveryRowAndColumnAreValid'

describe("Check if Every Row and Column Contains All Numbers",()=>{
  const samples = {
     first: [[1,1,1],[1,2,3],[1,2,3]],
     second: [[1,2,3],[3,1,2],[2,3,1]],
  }

  const results = {
    first : false,
    second: true,
  }
    
   it.each(Object.keys(samples))
   ("Should return exact result",(key)=>{
       const sample = samples[key];
       const result = results[key];
       const actual = checkValid(sample);
       expect(actual).toEqual(result);
   });
});


