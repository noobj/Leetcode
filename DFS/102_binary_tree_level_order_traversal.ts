import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function levelOrder(root: TreeNode | null): number[][] {
    if (root == null) return [];
    const result: number[][] = [];
    helper(root, result, 0);
    return result;
}

function helper(root: TreeNode, res: number[][], level: number) {
    if (root == null) return;
    if (res[level] == undefined) res[level] = [];
    res[level].push(root.val);
    helper(root.left, res, level + 1);
    helper(root.right, res, level + 1);
}

function deepestLeavesSum(root: TreeNode | null): number {
    const leveledNums = levelOrder(root);
    return leveledNums[leveledNums.length - 1].reduce((sum, v) => {
        return sum + v;
    }, 0);
}

function main() {
    const hrstart = process.hrtime();
    console.log(deepestLeavesSum(turnArrayIntoTree([3, 9, 20, null, null, 15, 7], 0)));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
