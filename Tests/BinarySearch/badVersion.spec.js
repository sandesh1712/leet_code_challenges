import { solution } from "../../BinarySearch/badVersion";

describe("Bad Version",()=>{
    let samples ={
        first: {
            n: 5,
            bad: 4,
        },
        second: {
            n: 10,
            bad: 3
        },
        third: {
            n: 1,
            bad: 1
        }
    }

    it.each(Object.keys(samples))
    ("Should return first bad version",(key)=>{
        const sample = samples[key];
        const badVersion = (x)=>{
            return x >= sample.bad;
        }

        const actual = solution(badVersion)(sample.n);
        expect(actual).toEqual(sample.bad);
    })
})