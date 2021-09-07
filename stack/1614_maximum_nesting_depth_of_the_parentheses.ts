function maxDepth(s: string): number {
    let count = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++;
        } else if (s[i] === ')') {
            if (count > max) max = count;

            count--;
        }
    }

    return max;
}

function main() {
    const hrstart = process.hrtime();
    console.log(maxDepth('1+(2*3)/(2-1)'));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
