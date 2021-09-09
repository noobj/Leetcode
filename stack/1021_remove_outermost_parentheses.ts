function removeOuterParentheses(s: string): string {
    let count = 0;
    let result = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            if (count != 0) result += s[i];
            count++;
        } else if (s[i] == ')') {
            count--;
            if (count != 0) result += s[i];
        }
    }

    return result;
}

function main() {
    const hrstart = process.hrtime();
    console.log(removeOuterParentheses('(()())(())'));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
