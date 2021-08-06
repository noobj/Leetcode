const hashtable = new Set();

function isHappy(n: number): boolean {
    if (n == 1) return true;

    if (hashtable.has(n)) {
        return false;
    }

    hashtable.add(n);

    const splitedN = n
        .toString()
        .split('')
        .map((a) => +a);

    n = splitedN.reduce((sum, v) => {
        return (sum += v * v);
    }, 0);

    return isHappy(n);
}

function main() {
    const hrstart = process.hrtime();
    console.log(isHappy(10));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
