import { trap  } from "../../Arrays/trappingRainWater";

describe("Trapping Rain",()=>{
  const samples = {
     first: [0,1,0,2,1,0,1,3,2,1,2,1],
     second: [4,2,0,3,2,5],
  }

  const results = {
    first : 6,
    second: 9,
  }
    
   it.each(Object.keys(samples))
   ("should return result",(key)=>{
       const sample = samples[key];
       const result = results[key];
       const actual = trap(sample);
       expect(actual).toEqual(result);
   });
});


