function largestSumAfterKNegations(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < k; i++) {
        nums[0] = -nums[0];
        nums.sort((a, b) => a - b);
    }

    return nums.reduce((sum, v) => sum + v, 0);
}

function main() {
    const hrstart = process.hrtime();
    console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
