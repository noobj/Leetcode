import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if (root == null) return 0;

    if (root.val > high) return rangeSumBST(root.left, low, high);
    else if (root.val < low) return rangeSumBST(root.right, low, high);
    else {
        const left = rangeSumBST(root.left, low, high);
        const right = rangeSumBST(root.right, low, high);
        return root.val + left + right;
    }
}

function main() {
    const hrstart = process.hrtime();
    console.log(rangeSumBST(turnArrayIntoTree([10, 5, 15, 3, 7, null, 18], 0), 7, 15));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
