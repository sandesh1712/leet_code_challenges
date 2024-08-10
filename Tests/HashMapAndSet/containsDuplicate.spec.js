import { containsDuplicate } from "../../HashMapsAndSet/containsDuplicate";



describe("Hash Map Contains Duplicate",()=>{
    
    const samples = {
        first:[1, 2, 3, 1],
        second:[1, 2, 3, 4],
        third:[1,1,2,2],
        fourth:[1],
    }

    const results = {
        first: true,
        second:false,
        third:true,
        fourth:false, 
    }

    it.each(Object.keys(samples))
    ("Should return correct result",(key)=>{
        let sample = samples[key];
        const result = results[key];
        const actual = containsDuplicate(sample);
        expect(actual).toEqual(result);
    })
})