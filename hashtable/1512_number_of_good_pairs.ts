import { HashMap } from '../modules/hashmap.module';

function numIdenticalPairs(nums: number[]): number {
    const hashmap = new HashMap<number, number>();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        const tmp = hashmap.get(nums[i]);
        if (tmp != undefined) {
            count += tmp;

            hashmap.put(nums[i], tmp + 1);
        } else {
            hashmap.put(nums[i], 1);
        }
    }

    return count;
}

function main() {
    const hrstart = process.hrtime();
    console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
