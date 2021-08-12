import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function balanceBST(root: TreeNode | null): TreeNode | null {
    return constructBalanceBinaryTree(turnTreeIntoArray(root));
}

function constructBalanceBinaryTree(nums: number[]): TreeNode | null {
    if (nums.length == 0) return null;
    if (nums.length == 1) return new TreeNode(nums[0], null, null);

    let midIndex = Math.floor(nums.length / 2);

    const node = new TreeNode(nums[midIndex], null, null);

    node.left = constructBalanceBinaryTree(nums.slice(0, midIndex));
    node.right = constructBalanceBinaryTree(nums.slice(midIndex + 1));

    return node;
}

function turnTreeIntoArray(root: TreeNode): number[] {
    if (root == null) return [];

    const leftArray = turnTreeIntoArray(root.left);
    const rightArray = turnTreeIntoArray(root.right);
    return leftArray.concat(root.val).concat(rightArray);
}

function main() {
    const hrstart = process.hrtime();
    console.log(balanceBST(turnArrayIntoTree([2, 1, 3, null, null, null, 4], 0)));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
