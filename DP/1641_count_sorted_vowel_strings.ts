// function countVowelStrings(n: number): number {
//     const cal: number[][] = [];
//     for (let i = 0; i <= n; i++) {
//         cal[i] = new Array(5).fill(undefined);
//     }

//     for (let i = 1; i <= 5; i++) cal[1][i] = 1;
//     for (let i = 1; i < n; i++) {
//         for (let j = 5; j > 0; j--) {
//             let result = 0;
//             for (let k = j; k > 0; k--) {
//                 result += cal[i][k];
//             }
//             cal[i + 1][j] = result;
//         }
//     }

//     return cal[n].slice(1).reduce((sum, v) => sum + v);
// };

function countVowelStrings(n: number): number {
    let a = 1,
        e = 1,
        i = 1,
        o = 1,
        u = 1;
    while (n > 1) {
        a = a + e + i + o + u; // a, e, i, o, u -> aa, ae, ai, ao, au
        e = e + i + o + u; // e, i, o, u -> ee, ei, eo, eu
        i = i + o + u; // i, o, u -> ii, io, iu
        o = o + u; // o, u -> oo, ou
        u = u; // u -> uu
        n--;
    }

    return a + e + i + o + u;
}

function main() {
    const hrstart = process.hrtime();
    console.log(countVowelStrings(33));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
