import { HashMap } from '../modules/hashmap.module';

function smallerNumbersThanCurrent(nums: number[]): number[] {
    const hashmap = new HashMap();
    const copy = [...nums].sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < copy.length; i++)
        if (hashmap.get(copy[i]) == null) hashmap.put(copy[i], i);

    for (let i = 0; i < nums.length; i++) {
        result.push(hashmap.get(nums[i]));
    }

    return result;
}

function main() {
    const hrstart = process.hrtime();
    console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
