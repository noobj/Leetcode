import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function isValidBST(root: TreeNode | null): boolean {
    return checkValid(root, null, null);
}

function checkValid(root: TreeNode, low: number, high: number): boolean {
    if (root == null) return true;

    if ((low != null && root.val <= low) || (high != null && root.val >= high))
        return false;

    return checkValid(root.left, low, root.val) && checkValid(root.right, root.val, high);
}

function main() {
    const hrstart = process.hrtime();
    console.log(isValidBST(turnArrayIntoTree([5, 1, 4, null, null, 3, 6], 0)));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
