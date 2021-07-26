const dp: number[][] = [];

function longestPalindromeSubseq(s: string): number {
    for (let i = 0; i < s.length; i++) {
        dp[i] = new Array(s.length).fill(undefined);
    }

    return calLPS(s, 0, s.length - 1);
}

function calLPS(s: string, start: number, end: number): number {
    if (start == end) return 1;
    if (start > end) return 0;

    if (dp[start][end] != undefined) return dp[start][end];

    if (s[start] == s[end]) dp[start][end] = calLPS(s, start + 1, end - 1) + 2;
    else dp[start][end] = Math.max(calLPS(s, start + 1, end), calLPS(s, start, end - 1));

    return dp[start][end];
}

function main() {
    const hrstart = process.hrtime();
    console.log(longestPalindromeSubseq("euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew"));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
