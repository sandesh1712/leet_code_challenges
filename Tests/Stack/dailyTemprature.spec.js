import { dailyTemperatures } from "../../Stack/dailyTemprature"

describe("Stack > Daily Temprature",()=>{
    const samples = {
        first: [73,74,75,71,69,72,76,73] ,
        second: [30,40,50,60],
        third: [30,60,90], 
    }; 

    const results = {
        first: [1,1,4,2,1,1,0,0],
        second: [1,1,1,0],
        third: [1,1,0],
    };

    it.each(Object.keys(samples))
    ("Should return correct result",(key)=>{
        const sample = samples[key];
        const result = results[key];
        let actual = dailyTemperatures(sample);
        expect(JSON.stringify(actual)).toEqual(JSON.stringify(result));
    })
})