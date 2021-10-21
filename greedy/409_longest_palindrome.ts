function longestPalindrome(s: string): number {
    const hashset = new Set();
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (hashset.has(s[i])) {
            count += 2;
            hashset.delete(s[i]);
        } else {
            hashset.add(s[i]);
        }
    }

    if (hashset.size > 0) count++;

    return count;
}

function main() {
    const hrstart = process.hrtime();
    console.log(longestPalindrome('abccccdd'));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
