function isSubsequence(s: string, t: string): boolean {
    // return twoPointerSearch(s, t, 0, s.length - 1);
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

function twoPointerSearch(s: string, t: string, i: number, j: number): boolean {
    if (i > j) return true;

    if (i == j) {
        return t.indexOf(s[i]) == -1 ? false : true;
    }

    const searchFromHead = t.indexOf(s[i]);
    const searchFromRear = t.indexOf(s[j]);

    if (searchFromHead == -1 || searchFromRear == -1 || searchFromRear < searchFromHead)
        return false;

    return twoPointerSearch(s, t.slice(searchFromHead + 1, searchFromRear), i + 1, j - 1);
}

function main() {
    const hrstart = process.hrtime();
    console.log(
        isSubsequence(
            'axc',
            'auuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuggggggggguuuuuuuuuuuuuuuuuuuuuuuuuuuhbgllllllllgggggggggggggggggllllllllllllllllllllllllldc'
        )
    );
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
