import { TreeNode, turnArrayIntoTree } from '../modules/binary_tree.module';

function tree2str(root: TreeNode | null): string {
    if (root.left != null && root.right != null)
        return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
    else if (root.left == null && root.right == null) return root.val.toString();
    else if (root.left != null && root.right == null)
        return `${root.val}(${tree2str(root.left)})`;
    else if (root.left == null && root.right != null)
        return `${root.val}()(${tree2str(root.right)})`;
}

function tree2strIterative(root: TreeNode | null): string {
    if (root == null) return '';

    const stack: TreeNode[] = [];
    stack.push(root);
    const visited = new Set<TreeNode>();
    let result = '';

    while (stack.length != 0) {
        const current = stack[stack.length - 1];
        if (visited.has(current)) {
            stack.pop();
            result += ')';
        } else {
            visited.add(current);
            result += '(' + current.val;
            if (current.left == null && current.right != null) result += '()';
            if (current.right != null) stack.push(current.right);
            if (current.left != null) stack.push(current.left);
        }
    }

    return result.slice(1, -1);
}

function main() {
    const hrstart = process.hrtime();
    console.log(tree2strIterative(turnArrayIntoTree([1, 2, 3, 4], 0)));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
