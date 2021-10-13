function maxIncreaseKeepingSkyline(grid: number[][]): number {
    let ans = 0;
    const dp = [];
    for (let i = 0; i < grid.length; i++) {
        const valuesInColumn = grid.map((v) => v[i]);
        dp[i] = Math.max(...valuesInColumn);
    }

    for (let i = 0; i < grid.length; i++) {
        const maxInRow = Math.max(...grid[i]);
        for (let j = 0; j < grid[i].length; j++) {
            const maxInColumn = dp[j];

            const base = Math.min(maxInColumn, maxInRow);
            ans += base - grid[i][j];
        }
    }

    return ans;
}

function main() {
    const hrstart = process.hrtime();
    console.log(
        maxIncreaseKeepingSkyline([
            [3, 0, 8, 4],
            [2, 4, 5, 7],
            [9, 2, 6, 3],
            [0, 3, 1, 0]
        ])
    );
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
