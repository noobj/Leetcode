function isSubsequence(s: string, t: string): boolean {
    if (s == t) return true;

    let indexS = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] == s[indexS]) {
            indexS++;
        }

        if (indexS == s.length) return true;
    }

    return false;
}

function main() {
    const hrstart = process.hrtime();
    console.log(isSubsequence('axc', 'auuuuuuuuuuuuuxc'));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
