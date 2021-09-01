import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root == null) return false;

    return helper(root, 0, targetSum);
}

function helper(root: TreeNode, sum: number, targetSum: number): boolean {
    if (root.left == null && root.right == null) {
        if (sum + root.val == targetSum) return true;
        else return false;
    }

    if (root.left == null) return helper(root.right, sum + root.val, targetSum);
    if (root.right == null) return helper(root.left, sum + root.val, targetSum);

    return (
        helper(root.left, sum + root.val, targetSum) ||
        helper(root.right, sum + root.val, targetSum)
    );
}

function main() {
    const hrstart = process.hrtime();
    console.log(
        hasPathSum(
            turnArrayIntoTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 0),
            23
        )
    );
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
