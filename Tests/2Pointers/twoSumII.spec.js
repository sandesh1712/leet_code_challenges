import {twoSum } from '../../2Pointers/twoSumII';

describe("2 Sum II",()=>{
      
      let samples = {
            first: [[2,7,11,15],9],
            second: [[2,3,4],6],
            third:[[-1,0],-1]
      }

      let results = {
            first: [1,2],
            second: [1,3],
            third:[1,2]
      }

      it.each(Object.keys(samples))
      ("Should match results",(key)=>{
          let sample = samples[key];
          let result = results[key];
          let actual = twoSum(sample[0],sample[1]);
          expect(JSON.stringify(result)).toEqual(JSON.stringify(actual));
      });
});