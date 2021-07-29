function getRow(rowIndex: number): number[] {
    rowIndex = rowIndex + 1;
    const dp: number[][] = [];
    for (let i = 1; i <= rowIndex; i++) {
        dp[i] = new Array(i + 1);
        for (let j = 1; j <= i; j++) {
            if (j == 1 || i == j) dp[i][j] = 1;
            else dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
        }
    }
    return dp[rowIndex].slice(1);
}

function getRowRecursive(rowIndex: number): number[] {
    rowIndex = rowIndex + 1;
    const result: number[] = [];
    for (let j = 1; j <= rowIndex; j++) {
        result.push(calNode(rowIndex, j));
    }
    return result;
}

function calNode(i: number, j: number): number {
    if (j == 1 || i == j) return 1;

    return calNode(i - 1, j) + calNode(i - 1, j - 1);
}

function main() {
    const hrstart = process.hrtime();
    console.log(getRow(30));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
