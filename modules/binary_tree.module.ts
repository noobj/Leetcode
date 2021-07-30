export class TreeNode {
    val: number | null;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number | null, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export function turnArrayIntoTree(
    nums: Array<number | null>,
    i: number
): TreeNode | null {
    let root = null;
    // Base case for recursion
    if (i < nums.length) {
        const temp = new TreeNode(nums[i]);
        root = temp;

        // insert left child
        root.left = turnArrayIntoTree(nums, 2 * i + 1);

        // insert right child
        root.right = turnArrayIntoTree(nums, 2 * i + 2);
    }

    return root;
}

const root = turnArrayIntoTree([3, 9, 20, null, null, 15, 7], 0);
