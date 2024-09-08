import { productExceptSelf } from "../../Arrays/productOfArrayExceptSelf";


describe("Product of Array Except Self",()=>{
  const samples = {
     first: [1,2,3,4],
     second: [-1,1,0,-3,3],
     third: [0,0,0,0],
  }

  const results = {
    first : [24,12,8,6],
    second: [0,0,9,0,0],
    third: [0,0,0,0],
  }
    
   it.each(Object.keys(samples))
   ("should return exact array",(key)=>{
       const sample = samples[key];
       const result = results[key];
       const actual = productExceptSelf(sample);
       expect(JSON.stringify(actual)).toEqual(JSON.stringify(result));
   });
});


