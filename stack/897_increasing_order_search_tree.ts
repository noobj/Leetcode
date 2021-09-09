import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function increasingBST(root: TreeNode | null): TreeNode | null {
    const stack: TreeNode[] = [];
    const result: number[] = [];
    let current = root;

    while (current != null || stack.length != 0) {
        if (current != null) {
            stack.push(current);
            current = current.left;
        } else {
            const tmp = stack.pop();
            result.push(tmp.val);
            current = tmp.right;
        }
    }

    const tree = new TreeNode(result[0]);
    let tmp = tree;
    for (let i = 1; i < result.length; i++) {
        tmp.right = new TreeNode(result[i]);
        tmp = tmp.right;
    }

    return tree;
}

function main() {
    const hrstart = process.hrtime();
    console.log(
        increasingBST(
            turnArrayIntoTree([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9], 0)
        )
    );
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
