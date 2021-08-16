import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function inorderTraversal(root: TreeNode | null): number[] {
    if (root == null) return [];

    const leftNode = inorderTraversal(root.left);
    const rightNode = inorderTraversal(root.right);
    return [...leftNode, root.val, ...rightNode];
}

function inorderTraversaliterative(root: TreeNode | null): number[] {
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

    return result;
}

function postorderTraversaliterative(root: TreeNode | null): number[] {
    const stack: TreeNode[] = [];
    const result: number[] = [];
    let current = root;

    while (current != null || stack.length != 0) {
        if (current != null) {
            stack.push(current);
            result.unshift(current.val);
            current = current.right;
        } else {
            const tmp = stack.pop();
            current = tmp.left;
        }
    }

    return result;
}

function preorderTraversaliterative(root: TreeNode | null): number[] {
    const stack: TreeNode[] = [];
    const result: number[] = [];
    let current = root;

    while (current != null || stack.length != 0) {
        if (current != null) {
            stack.push(current);
            result.push(current.val);
            current = current.left;
        } else {
            const tmp = stack.pop();
            current = tmp.right;
        }
    }

    return result;
}

function main() {
    const hrstart = process.hrtime();
    console.log(
        preorderTraversaliterative(
            turnArrayIntoTree([1, null, 2, null, null, null, 3], 0)
        )
    );
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
