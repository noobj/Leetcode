const dp = new Map<string, number[]>();

function diffWaysToCompute(expression: string): number[] {
    const result = new Array<number>();

    if (dp.has(expression)) return dp.get(expression);

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] == '-' || expression[i] == '*' || expression[i] == '+') {
            const left = expression.slice(0, i);
            const right = expression.slice(i + 1);
            const leftResult = diffWaysToCompute(left);
            const rightResult = diffWaysToCompute(right);

            for (let j = 0; j < leftResult.length; j++) {
                for (let k = 0; k < rightResult.length; k++) {
                    let c = 0;
                    switch (expression[i]) {
                        case '+':
                            c = leftResult[j] + rightResult[k];
                            break;
                        case '-':
                            c = leftResult[j] - rightResult[k];
                            break;
                        case '*':
                            c = leftResult[j] * rightResult[k];
                            break;
                    }
                    result.push(c);
                }
            }
        }
    }

    if (result.length == 0) {
        result.push(+expression);
    }

    dp.set(expression, result);
    return result;
}

function main() {
    const hrstart = process.hrtime();
    console.log(diffWaysToCompute('2*3-4*5'));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
