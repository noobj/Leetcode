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
    const a = turnArrayIntoTree([100], 0);
    console.log(a.search(2));
    console.log(a.add(99));
    console.log(a.add(98));
    console.log(a.add(97));
    console.log(a.add(96));
    console.log(a.add(95));
    console.log(a.add(94));
    console.log(a.add(93));
    console.log(a.add(92));
    console.log(a.add(91));
    console.log(a.add(90));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
