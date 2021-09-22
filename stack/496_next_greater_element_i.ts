function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const nge = new Array(nums2.length);
    const stack = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length != 0 && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }

        nge[i] = stack.length == 0 ? -1 : stack[stack.length - 1];

        stack.push(nums2[i]);
    }

    const res = [];
    for (let i = 0; i < nums1.length; i++) {
        const index = nums2.indexOf(nums1[i]);
        res.push(nge[index]);
    }

    return res;
}

function main() {
    const hrstart = process.hrtime();
    console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
