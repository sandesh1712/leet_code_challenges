import { sortedSquares } from "../../2Pointers/sortedSquares";

describe("Sorted Square",()=>{
      
      let samples = {
            first: [-4,-1,0,3,10],
            second: [-7,-3,2,3,11],
            third:[-9,-1,0,2,3],
            fourth:[-5,-4,-3,-2,-1],
      }

      let results = {
            first: [0,1,9,16,100],
            second: [4,9,9,49,121],
            third:[0,1,4,9,81],
            fourth:[1,4,9,16,25],
      }

      it.each(Object.keys(samples))
      ("Should match results",(key)=>{
          let sample = samples[key];
          let result = results[key];
          let actual = sortedSquares(sample);
          expect(JSON.stringify(result)).toEqual(JSON.stringify(actual));
      });
});