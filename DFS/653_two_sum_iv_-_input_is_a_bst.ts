import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function findTarget(root: TreeNode | null, k: number): boolean {
    let cur = root;
    const stack: TreeNode[] = [];
    const nums: number[] = [];

    while (cur != null || stack.length != 0) {
        if (cur != null) {
            stack.push(cur);
            cur = cur.left;
        } else {
            const tmp = stack.pop();
            nums.push(tmp.val);
            cur = tmp.right;
        }
    }

    for (let i = 0, j = nums.length - 1; i < j; ) {
        const sum = nums[i] + nums[j];
        if (sum === k) return true;
        else if (sum > k) j--;
        else i++;
    }

    return false;
}

function main() {
    const hrstart = process.hrtime();
    console.log(findTarget(turnArrayIntoTree([5, 3, 6, 2, 4, null, 7], 0), 13));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
