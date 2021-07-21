function generate(numRows: number): number[][] {
    const result: number[][] = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
        const tmp = result[i - 1];
        const row = new Array(i + 1).fill(1);
        const mid = i >> 1;
        for (let j = 1; j <= mid; j++) {
            row[j] = tmp[j] + tmp[j - 1];
            row[i - j] = tmp[j] + tmp[j - 1];
        }

        result[i] = row;
    }

    return result;
}

console.log(generate(7));
