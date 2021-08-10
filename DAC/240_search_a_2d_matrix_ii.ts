function searchMatrix(matrix: number[][], target: number): boolean {
    const height = matrix.length;
    if (height === 0 || matrix[0].length === 0) return false;
    if (height === 1 && matrix[0].length === 1) return matrix[0][0] === target;

    const colMid = Math.floor(matrix[0].length / 2);
    let rowMid = 0;
    while (rowMid < height && rowMid >= 0) {
        if (matrix[rowMid][colMid] == target) return true;

        if (
            rowMid > 0 &&
            matrix[rowMid - 1][colMid] < target &&
            matrix[rowMid][colMid] > target
        )
            break;

        if (matrix[rowMid][colMid] < target) rowMid++;
        else rowMid--;
    }

    if (rowMid == -1) rowMid = 0;

    const upRight = matrix.slice(0, rowMid).map((v) => v.slice(colMid + 1));
    const bottomLeft = matrix.slice(rowMid).map((v) => v.slice(0, colMid));
    return searchMatrix(upRight, target) || searchMatrix(bottomLeft, target);
}

function main() {
    const hrstart = process.hrtime();
    console.log(searchMatrix([[-1, 3]], -1));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
