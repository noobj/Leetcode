import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function averageOfLevels(root: TreeNode | null): number[] {
    const queue: TreeNode[] = [];
    queue.push(root);
    const ans: number[] = [];

    while (queue.length != 0) {
        let sum = 0;
        let count = 0;
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const current = queue.shift();
            sum += current.val;
            count++;
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        ans.push(sum / count);
    }

    return ans;
}

function averageOfLevelsDFS(root: TreeNode | null): number[] {
    const sum: number[] = [];
    const count: number[] = [];
    const ans: number[] = [];
    helper(root, 0, sum, count);

    for (let i = 0; i < sum.length; i++) {
        ans.push(sum[i] / count[i]);
    }

    return ans;
}

function helper(root: TreeNode, level: number, sum: number[], count: number[]) {
    if (root == null) return;

    if (sum[level] == undefined) sum[level] = 0;
    if (count[level] == undefined) count[level] = 0;

    sum[level] += root.val;
    count[level] += 1;

    helper(root.left, level + 1, sum, count);
    helper(root.right, level + 1, sum, count);
}
function main() {
    const hrstart = process.hrtime();
    console.log(averageOfLevelsDFS(turnArrayIntoTree([3, 9, 20, 15, 17, 4, 5], 0)));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
