function minSwaps(s: string): number {
    if (s.length == 1) return 0;
    let zeroMiss = 0;
    let oneMiss = 0;
    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            if (s[i] != '0') zeroMiss++;
        } else {
            if (s[i] != '1') oneMiss++;
        }
    }
    let flag = 0;
    if (zeroMiss != oneMiss) {
        zeroMiss = Number.MAX_VALUE;
        flag = 1;
    }
    if (zeroMiss == 0 && oneMiss == 0) return 0;
    const zeroStart = zeroMiss;
    zeroMiss = oneMiss = 0;
    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            if (s[i] != '1') oneMiss++;
        } else {
            if (s[i] != '0') zeroMiss++;
        }
    }
    if (zeroMiss != oneMiss) {
        if (flag == 1) return -1;
        else oneMiss = Number.MAX_VALUE;
    }

    const oneStart = oneMiss;

    return Math.min(oneStart, zeroStart);
}

function main() {
    const hrstart = process.hrtime();
    console.log(minSwaps('0010111'));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
