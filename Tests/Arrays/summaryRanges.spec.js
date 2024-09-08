import { summaryRanges  } from "../../Arrays/summaryRanges";


describe("Summary Ranges",()=>{
  const samples = {
     first: [0,1,2,4,5,7],
     second: [0,2,3,4,6,8,9],
  }

  const results = {
    first : ["0->2","4->5","7"],
    second: ["0","2->4","6","8->9"],
  }
    
   it.each(Object.keys(samples))
   ("should return exact array",(key)=>{
       const sample = samples[key];
       const result = results[key];
       const actual = summaryRanges(sample);
       expect(JSON.stringify(actual)).toEqual(JSON.stringify(result));
   });
});


