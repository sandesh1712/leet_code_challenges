import { romanToInt } from "../../Arrays/romanToInteger";


describe("Rotate Matrix",()=>{
  const samples = {
     first: "XX",
     second: "III",
     third:"LVIII",
     fourth:"MCMXCIV"
  }

  const results = {
    first : 20,
    second: 3,
    third: 58,
    fourth: 1994
  }
    
   it.each(Object.keys(samples))
   ("Should return exact Integer",(key)=>{
       const sample = samples[key];
       const result = results[key];
       const actual = romanToInt(sample)
       expect(actual).toEqual(result);
   });
});


