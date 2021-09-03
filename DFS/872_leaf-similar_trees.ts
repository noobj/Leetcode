import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    return compareTwoArray(getLeaves(root1), getLeaves(root2));
}

function getLeaves(root: TreeNode): number[] {
    if (root == null) return [];
    if (root.left == null && root.right == null) return [root.val];

    const left = getLeaves(root.left);
    const right = getLeaves(root.right);

    return [...left, ...right];
}

function compareTwoArray(num1: number[], num2: number[]): boolean {
    if (num1.length != num2.length) return false;

    for (let i = 0; i < num1.length; i++) if (num1[i] != num2[i]) return false;

    return true;
}

function main() {
    const hrstart = process.hrtime();
    console.log(
        leafSimilar(
            turnArrayIntoTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4], 0),
            turnArrayIntoTree(
                [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8],
                0
            )
        )
    );
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
