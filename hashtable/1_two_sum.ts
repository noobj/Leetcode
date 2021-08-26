import { HashMap } from '../modules/hashmap.module';

function twoSum(nums: number[], target: number): number[] {
    const hash = new HashMap();
    hash.put(nums[0], 0);
    for (let i = 1; i < nums.length; i++) {
        const tmp = hash.get(target - nums[i]);
        if (tmp != -1) return [tmp, i];

        hash.put(nums[i], i);
    }
}

function main() {
    const hrstart = process.hrtime();
    console.log(twoSum([3,2,4], 6));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
