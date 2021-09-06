function fib(n: number): number {
    if (n == 0 || n == 1) return n;

    let pre = 0;
    let cur = 1;
    while (n > 1) {
        const tmp = cur;
        cur = cur + pre;
        pre = tmp;
        n--;
    }

    return cur;
}

function fibRec(n: number): number {
    if (n == 0 || n == 1) return n;

    return fibRec(n - 1) + fibRec(n - 2);
}

function main() {
    const hrstart = process.hrtime();
    console.log(fibRec(6));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
