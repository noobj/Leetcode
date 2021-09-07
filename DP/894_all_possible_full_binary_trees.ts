import { TreeNode } from '../modules/binary_tree.module';

const dp = [];
dp[1] = [new TreeNode(0)];
const tree = new TreeNode(0);
tree.left = new TreeNode(0);
tree.right = new TreeNode(0);
dp[3] = [tree];

function allPossibleFBT(n: number): Array<TreeNode | null> {
    if (n % 2 == 0) return [];

    if (dp[n]) return dp[n];

    const result = [];
    for (let i = 1; i < n - 1; i += 2) {
        const left = allPossibleFBT(i);
        const right = allPossibleFBT(n - 1 - i);

        for (let j = 0; j < left.length; j++) {
            for (let k = 0; k < right.length; k++) {
                const tree = new TreeNode(0);
                tree.left = left[j];
                tree.right = right[k];

                result.push(tree);
            }
        }
    }

    dp[n] = result;
    return result;
}

function allPossibleFBTIter(n: number): Array<TreeNode | null> {
    if (n % 2 == 0) return [];

    const dp = [];
    dp[1] = [new TreeNode(0)];
    const result = [];

    for (let i = 3; i <= n; i += 2) {
        const tmp = [];
        for (let j = 1; j < i - 1; j += 2) {
            const left = dp[j];
            const right = dp[i - 1 - j];

            for (const k of left) {
                for (const l of right) {
                    const tree = new TreeNode(0);
                    tree.left = k;
                    tree.right = l;

                    tmp.push(tree);
                }
            }
        }

        dp[i] = tmp;
    }

    return dp[n];
}

function main() {
    const hrstart = process.hrtime();
    console.log(allPossibleFBTIter(7));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
