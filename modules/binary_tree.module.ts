export class TreeNode {
    val: number | null;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number | null, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }

    public search(target: number): TreeNode | null {
        let cur = this as TreeNode;
        while (cur != null && cur.val != target) {
            if (cur.val < target) cur = cur.right;
            else cur = cur.left;
        }

        return cur;
    }

    public add(target: number): TreeNode {
        let cur = this as TreeNode;

        while (true) {
            if (cur != null) {
                if (target >= cur.val) {
                    if (cur.right) cur = cur.right;
                    else {
                        cur.right = new TreeNode(target);
                        break;
                    }
                } else {
                    if (cur.left) cur = cur.left;
                    else {
                        cur.left = new TreeNode(target);
                        break;
                    }
                }
            } else {
                cur = new TreeNode(target);
            }
        }

        return this;
    }
}

export function turnArrayIntoTree(
    nums: Array<number | null>,
    i: number
): TreeNode | null {
    let root = null;
    // Base case for recursion
    if (i < nums.length) {
        if (nums[i] == null) return null;

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
