const dp: number[] = [];
dp[0] = 0;
dp[1] = 1;
dp[2] = 1;

function tribonacci(n: number): number {
    if (dp[n] !== undefined) {
        return dp[n];
    }

    dp[n] = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
    return dp[n];
}

const hrstart = process.hrtime();
console.log(tribonacci(25));
const hrend = process.hrtime(hrstart);
console.log(`Took ${hrend[1] / 1000000} milliseconds.`);