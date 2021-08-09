function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
    let i = m - 1,
        j = n - 1,
        k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }

    return nums1;
}

function main() {
    const hrstart = process.hrtime();
    console.log(merge([1, 2, 7, 0, 0, 0], 3, [2, 5, 6], 3));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
