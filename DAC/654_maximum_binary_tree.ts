import { TreeNode } from "../modules/binary_tree.module";

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if (nums.length == 0) return null;
    if (nums.length == 1) return new TreeNode(nums[0], null, null);

    let maxIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[maxIndex]) maxIndex = i;
    }

    const node = new TreeNode(nums[maxIndex], null, null);

    node.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    node.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));

    return node;
}

function main() {
    const hrstart = process.hrtime();
    console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
