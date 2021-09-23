import { TreeNode } from '../modules/binary_tree.module';

function bstFromPreorder(preorder: number[]): TreeNode | null {
    const stack: TreeNode[] = [];
    const root = new TreeNode(preorder[0]);
    stack.push(root);

    for (let i = 1; i < preorder.length; i++) {
        const node = new TreeNode(preorder[i]);
        if (node.val < stack[stack.length - 1].val) {
            stack[stack.length - 1].left = node;
        } else {
            let parent = stack.pop();
            while (stack.length != 0 && node.val > stack[stack.length - 1].val)
                parent = stack.pop();
            parent.right = node;
        }

        stack.push(node);
    }

    return root;
}

function main() {
    const hrstart = process.hrtime();
    console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
