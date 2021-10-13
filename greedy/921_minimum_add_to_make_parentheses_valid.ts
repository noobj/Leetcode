function minAddToMakeValid(s: string): number {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == ')' && stack[stack.length - 1] == '(') {
            stack.pop();
        } else stack.push(s[i]);
    }

    return stack.length;
}

function main() {
    const hrstart = process.hrtime();
    console.log(minAddToMakeValid('((('));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
