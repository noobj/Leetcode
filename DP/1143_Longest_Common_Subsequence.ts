const dp: number[][] = [];

function longestCommonSubsequence(text1: string, text2: string): number {
    for (let i = 0; i <= text1.length; i++) {
        dp[i] = new Array(text2.length).fill(undefined);
    }
    return calLCS(text1, text2, text1.length, text2.length);
}

function calLCS(str1: string, str2: string, length1: number, length2: number): number {
    if (length1 == 0 || length2 == 0) return 0;
    else if (dp[length1][length2] != undefined) return dp[length1][length2];
    else if (str1[length1 - 1] == str2[length2 - 1])
        return 1 + calLCS(str1, str2, length1 - 1, length2 - 1);
    else {
        dp[length1][length2] = Math.max(
            calLCS(str1, str2, length1, length2 - 1),
            calLCS(str1, str2, length1 - 1, length2)
        );

        return dp[length1][length2];
    }
}

function main() {
    const hrstart = process.hrtime();
    console.log(longestCommonSubsequence('mhunuzqrkzsnidwbun', 'szulspmhwpazoxijwbq'));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
