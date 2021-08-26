import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function minDepth(root: TreeNode | null): number {
    if (root == null) return 0;
    const queue: TreeNode[] = [];
    let level = 0;

    queue.push(root);
    while (queue.length > 0) {
        level++;
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const cur = queue.shift();
            if (cur.left == null && cur.right == null) return level;

            if (cur.left != null) queue.push(cur.left);
            if (cur.right != null) queue.push(cur.right);
        }
    }

    return level;
}

function minDepthDFS(root: TreeNode | null): number {
    if (root == null) return 0;
    return Math.min(helper(root, 1));
}

function helper(root: TreeNode, level: number): number {
    if (root == null) return Number.MAX_SAFE_INTEGER;
    if (root.left == null && root.right == null) return level;

    return Math.min(helper(root.left, level + 1), helper(root.right, level + 1));
}

function main() {
    const hrstart = process.hrtime();
    console.log(minDepthDFS(turnArrayIntoTree([3, 9, 20, null, null, 15, 7], 0)));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
