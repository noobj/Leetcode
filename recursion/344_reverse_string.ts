function reverseString(s: string[]): string[] {
    swap(s, 0);

    return s;
}

function swap(s: string[], current: number): void {
    const mid = Math.floor(s.length / 2);
    if (current == mid) return;

    swap(s, current + 1);
    const tmp = s[current];
    s[current] = s[s.length - 1 - current];
    s[s.length - 1 - current] = tmp;
}

function main() {
    const hrstart = process.hrtime();
    console.log(reverseString(["H","a","n","n","a","h"]));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
