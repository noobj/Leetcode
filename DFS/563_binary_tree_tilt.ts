import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function findTilt(root: TreeNode | null): number {
    return helper(root).result;
}

type nodeAndSum = {
    node: TreeNode;
    sum: number;
    result: number;
};

function helper(root: TreeNode | null): nodeAndSum {
    if (root == null)
        return {
            node: null,
            sum: 0,
            result: 0
        };

    const left = helper(root.left);
    const right = helper(root.right);

    const diff = Math.abs(left.sum - right.sum);
    const sum = left.sum + right.sum + root.val;

    root.left = left.node;
    root.right = right.node;
    root.val = diff;

    return {
        node: root,
        sum,
        result: left.result + right.result + diff
    };
}

function main() {
    const hrstart = process.hrtime();
    console.log(findTilt(turnArrayIntoTree([4, 2, 9, 3, 5, null, 7], 0)));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
