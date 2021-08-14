import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function isUnivalTree(root: TreeNode | null): boolean {
    if (root == null) return true;

    return helper(root, root.val);
}

function helper(root: TreeNode, target: number): boolean {
    if (root == null) return true;

    if (root.val != target) return false;

    return helper(root.left, target) && helper(root.right, target);
}

function main() {
    const hrstart = process.hrtime();
    console.log(isUnivalTree(turnArrayIntoTree([1, 1, 1, 1, 1, null, 1], 0)));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
