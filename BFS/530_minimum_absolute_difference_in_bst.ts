import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function getMinimumDifferenceDFS(root: TreeNode | null): number {
    const stack: TreeNode[] = [];
    const result: number[] = [];
    let current = root;
    let min = Number.MAX_SAFE_INTEGER;

    while (current != null || stack.length != 0) {
        if (current != null) {
            stack.push(current);
            current = current.left;
        } else {
            const tmp = stack.pop();
            min =
                Math.min(Math.abs(tmp.val - result[result.length - 1]), min) ||
                Number.MAX_SAFE_INTEGER;
            result.push(tmp.val);
            current = tmp.right;
        }
    }

    return min;
}

function getMinimumDifference(root: TreeNode | null): number {
    const queue: TreeNode[] = [];
    const visited: number[] = [];
    queue.push(root);
    visited.push(root.val);
    let min = Number.MAX_SAFE_INTEGER;

    while (queue.length > 0) {
        const current = queue.shift();
        const left = current.left;
        const right = current.right;
        if (left != null) {
            min = Math.min(min, minGap(visited, left.val));
            queue.push(left);
            visited.push(left.val);
        }

        if (right != null) {
            min = Math.min(min, minGap(visited, right.val));
            queue.push(right);
            visited.push(right.val);
        }
    }

    return min;
}

function minGap(nums: number[], target: number): number {
    return nums.reduce((min, v) => {
        return Math.min(min, Math.abs(target - v));
    }, Number.MAX_SAFE_INTEGER);
}

function main() {
    const hrstart = process.hrtime();
    console.log(
        getMinimumDifferenceDFS(
            turnArrayIntoTree([236, 104, 701, null, 227, null, 911], 0)
        )
    );
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
