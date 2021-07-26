function isPowerOfTwo(n: number): boolean {
    if (n == 0) return false;
    if (n == 1 || n == -1) return true;
    if (n % 2 != 0) return false;

    console.log(n);
    return isPowerOfTwo(Math.floor(n / 2));
}

function main() {
    const hrstart = process.hrtime();
    console.log(isPowerOfTwo(4294967296));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
