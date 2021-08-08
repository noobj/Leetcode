function mergeAlternately(word1: string, word2: string): string {
    let i = 0, // tracking word1
        j = 0; // tracking word2

    let result = '';
    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            result += word1[i++];
        }

        if (j < word2.length) {
            result += word2[j++];
        }
    }

    return result;
}

function main() {
    const hrstart = process.hrtime();
    console.log(mergeAlternately('abcd', 'pq'));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
