function climbStairs(n: number): number {
    if (n <= 1) {
        return n;
    }
    let last1 = 1;
    let last2 = 2;

    for (let i = 3; i <= n; i++) {
        const newValue = last1 + last2;
        last1 = last2;
        last2 = newValue;
    }

    return last2;
};

function main() {
    const hrstart = process.hrtime();
    console.log(climbStairs(5));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
