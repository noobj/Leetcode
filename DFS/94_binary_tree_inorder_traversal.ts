import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function inorderTraversal(root: TreeNode | null): number[] {
    if (root == null) return [];

    const leftNode = inorderTraversal(root.left);
    const rightNode = inorderTraversal(root.right);
    return [...leftNode, root.val, ...rightNode];
}

function main() {
    const hrstart = process.hrtime();
    console.log(inorderTraversal(turnArrayIntoTree([1, null, 2, null, null, 3], 0)));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
