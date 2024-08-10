import {rotate} from '../../Arrays/rotateMatrix'

describe("Rotate Matrix",()=>{
  const samples = {
     first: [[1,2,3],[4,5,6],[7,8,9]],
     second: [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]],
     third:[[1, 2],[3, 4]],
     fourth:[[1]]
  }

  const results = {
    first : [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ],
    second:[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]],
    third:[[3, 1],[4, 2]],
    fourth:[[1]]
  }
    
   it.each(Object.keys(samples))
   ("Should return exact result",(key)=>{
       const sample = samples[key];
       const result = results[key];
       const actual = rotate(sample);
       expect(JSON.stringify(actual)).toEqual(JSON.stringify(result));
   });
});


