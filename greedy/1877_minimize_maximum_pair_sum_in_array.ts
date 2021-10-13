function minPairSum(nums: number[]): number {
    nums = nums.sort((a, b) => a - b);
    let res = 0;
    for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
        const sum = nums[i] + nums[j];
        if (sum > res) res = sum;
    }

    return res;
}

function main() {
    const hrstart = process.hrtime();
    console.log(minPairSum([3, 5, 2, 3]));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
