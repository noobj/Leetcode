const dp: number[] = [];

function getMaximumGenerated(n: number): number {
    const result = [];

    for (let i = 0; i <= n; i++) {
        // result[i] = calResult(i);
        if (i <= 1) {
            result[i] = i;
            continue;
        }

        const iDivTwo = Math.floor(i / 2);
        if (i % 2 == 0) result[i] = result[iDivTwo];
        else result[i] = result[iDivTwo] + result[iDivTwo + 1];
    }

    return Math.max(...result);
}

function calResult(i: number): number {
    if (i == 0 || i == 1) return i;

    if (dp[i] != undefined) {
        return dp[i];
    }

    const iDivTwo = Math.floor(i / 2);
    if (i % 2 == 0) dp[i] = calResult(iDivTwo);
    else dp[i] = calResult(iDivTwo) + calResult(iDivTwo + 1);

    return dp[i];
}

function main() {
    const hrstart = process.hrtime();
    console.log(getMaximumGenerated(10000));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;