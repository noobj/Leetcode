import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function maxDepth(root: TreeNode | null): number {
    return helper(root, 0);
}

function helper(root: TreeNode | null, depth: number): number {
    if (root == null) return depth;

    return Math.max(helper(root.left, 1 + depth), helper(root.right, 1 + depth));
}

function main() {
    const hrstart = process.hrtime();
    console.log(maxDepth(turnArrayIntoTree([3, 9, 20, null, null, 15, 7], 0)));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
