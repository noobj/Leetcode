import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

const stack: string[] = [];
function sumRootToLeaf(root: TreeNode | null): number {
    helper(root, '');
    return stack.reduce((sum, v) => {
        return (sum += parseInt(v, 2));
    }, 0);
}

function helper(root: TreeNode, str: string): void {
    if (root == null) return;

    const result = str + root.val;
    if (root.left == null && root.right == null) stack.push(result);

    helper(root.left, result);
    helper(root.right, result);
}

function main() {
    const hrstart = process.hrtime();
    console.log(sumRootToLeaf(turnArrayIntoTree([0], 0)));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
