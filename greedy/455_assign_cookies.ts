function findContentChildren(g: number[], s: number[]): number {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let count = 0;

    if (s[s.length - 1] < g[0]) return 0;

    for (let i = 0; i < s.length; i++) {
        if (g[0] <= s[i]) {
            g.shift();
            count++;
        }
    }

    return count;
}

function main() {
    const hrstart = process.hrtime();
    console.log(findContentChildren([1, 2], [1, 1, 1]));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
