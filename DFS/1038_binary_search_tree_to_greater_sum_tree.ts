import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function bstToGst(root: TreeNode | null): TreeNode | null {
    if (root == null) return null;

    return helper(root, 0);
}

function helper(root: TreeNode, sum: number): TreeNode | null {
    if (root == null) return null;

    root.right = helper(root.right, sum);
    const tmp = root.right ? minNode(root.right).val + root.val : 0 + root.val + sum;
    root.val = tmp;

    root.left = helper(root.left, tmp);

    return root;
}

function minNode(node: TreeNode): TreeNode {
    while (node.left != null) node = node.left;

    return node;
}

function main() {
    const hrstart = process.hrtime();
    console.log(
        bstToGst(
            turnArrayIntoTree(
                [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8],
                0
            )
        )
    );
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
