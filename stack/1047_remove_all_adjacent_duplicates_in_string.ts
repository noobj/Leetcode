function removeDuplicates(s: string): string {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] === s[i]) {
            stack.pop();
            continue;
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join('');
}

function main() {
    const hrstart = process.hrtime();
    console.log(removeDuplicates('abbaca'));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
