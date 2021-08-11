import { bigRandomArray, bigDecreasingArray } from '../modules/big_array';

function sortArray(nums: number[]): number[] {
    if (nums.length <= 1) return nums;

    const pivot = nums.length / 2;
    const leftSide = sortArray(nums.slice(0, pivot));
    const rightSide = sortArray(nums.slice(pivot, nums.length));
    return merge(leftSide, rightSide);
}

function merge(left: number[], right: number[]): number[] {
    const result = [];
    let i = 0,
        j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            result.push(right[j]);
            j++;
        } else {
            result.push(left[i]);
            i++;
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
}

function main() {
    const hrstart = process.hrtime();
    console.log(sortArray(bigDecreasingArray));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
