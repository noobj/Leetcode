function getKth(lo: number, hi: number, k: number): number {
    let numsWithPow = [];
    const dp = [];

    for (let i = lo; i <= hi; i++) {
        let step = 0;
        let num = i;

        while (num != 1) {
            if (dp[num]) {
                step = step + dp[num];
                break;
            }

            if (num % 2 == 0) num = num / 2;
            else num = num * 3 + 1;

            step++;
        }

        dp[i] = step;
        numsWithPow.push({
            val: i,
            pow: step
        });
    }

    numsWithPow = numsWithPow.sort((a, b) => {
        if (a.pow === b.pow) return a.val - b.val;

        return a.pow - b.pow;
    });

    return numsWithPow[k - 1].val;
}

function calPower(num: number, step: number): number {
    if (num == 1) return step;

    if (num % 2 == 0) return calPower(num / 2, step + 1);
    else return calPower(num * 3 + 1, step + 1);
}

function main() {
    const hrstart = process.hrtime();
    console.log(getKth(7, 11, 4));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
