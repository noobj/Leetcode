function calPoints(ops: string[]): number {
    const stack = [];

    for (const op of ops) {
        if (isNaN(+op)) {
            switch (op) {
                case 'C':
                    stack.pop();
                    break;
                case 'D':
                    stack.push(stack[stack.length - 1] * 2);
                    break;
                case '+':
                    stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
                    break;
            }
        } else stack.push(+op);
    }

    return stack.reduce((sum, v) => sum + v, 0);
}

function main() {
    const hrstart = process.hrtime();
    console.log(calPoints(['5', '2', 'C', 'D', '+']));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
