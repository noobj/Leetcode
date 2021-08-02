/**
 * row 1: 0
 * row 2: 0 1
 * row 3: 0 1 1 0
 */

function kthGrammar(n: number, k: number): number {
    if (n == 1) return 0;

    const parentPos = Math.floor(k / 2) + (k % 2);
    const parentVal = kthGrammar(n - 1, parentPos);

    if (k % 2 == 1) {
        return parentVal ? 1 : 0;
    }

    return parentVal ? 0 : 1;
}

function main() {
    const hrstart = process.hrtime();
    console.log(kthGrammar(30, 334211722));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
