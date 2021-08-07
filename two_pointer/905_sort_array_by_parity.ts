function sortArrayByParity(nums: number[]): number[] {
    for (let i = 0, j = 0; j < nums.length; j++) {
        if (nums[j] % 2 == 0) {
            const tmp = nums[i];
            nums[i++] = nums[j];
            nums[j] = tmp;
        }
    }

    return nums;
}

function main() {
    const hrstart = process.hrtime();
    console.log(sortArrayByParity([3, 2, 4, 1]));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
