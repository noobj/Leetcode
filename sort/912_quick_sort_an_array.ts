import { bigRandomArray, bigDecreasingArray } from '../modules/big_array';

function sortArray(nums: number[]): number[] {
    qSort(nums, 0, nums.length - 1);

    return nums;
}

function qSort(nums: number[], low: number, high: number): void {
    if (low < high) {
        const pivot = partition(nums, low, high);
        qSort(nums, low, pivot - 1);
        qSort(nums, pivot + 1, high);
    }
}

function partition(nums: number[], low: number, high: number): number {
    const pivot = nums[high];

    let i = low;
    for (let j = low; j < high; j++) {
        if (nums[j] < pivot) {
            const tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
            i++;
        }
    }

    const tmp = nums[high];
    nums[high] = nums[i];
    nums[i] = tmp;

    return i;
}

function main() {
    const hrstart = process.hrtime();
    console.log(sortArray(bigDecreasingArray));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
