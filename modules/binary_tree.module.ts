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

    public inOrderSuccessor(node: TreeNode): TreeNode {
        if (node.right != null) return this.minNode(node);

        let cur = this as TreeNode;
        let succ: TreeNode = null;
        while (cur != null) {
            if (cur.val > node.val) {
                succ = cur;
                cur = cur.left;
            } else if (cur.val < node.val) {
                cur = cur.right;
            } else break;
        }

        return succ;
    }

    public minNode(node: TreeNode): TreeNode {
        while (node.left != null) node = node.left;

        return node;
    }

    public remove(key: number): TreeNode {
        if (!this) return null;
        if (key === this.val) {
            if (this.right == null && this.left == null) return null;
            if (!this.right) {
                return this.left;
            } else if (!this.left) {
                return this.right;
            } else {
                const min = this.minNode(this.right);
                this.right = this.right.remove(min.val);
                this.val = min.val;
            }
        } else if (key > this.val) {
            this.right = this.right ? this.right.remove(key) : null;
        } else {
            this.left = this.left ? this.left.remove(key) : null;
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
