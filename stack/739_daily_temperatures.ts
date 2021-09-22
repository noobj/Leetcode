function dailyTemperatures(temperatures: number[]): number[] {
    const stack = [];
    const res = new Array(temperatures.length);

    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (
            stack.length != 0 &&
            temperatures[stack[stack.length - 1]] <= temperatures[i]
        ) {
            stack.pop();
        }

        res[i] = stack.length == 0 ? 0 : stack[stack.length - 1] - i;
        stack.push(i);
    }

    return res;
}

function main() {
    const hrstart = process.hrtime();
    console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
