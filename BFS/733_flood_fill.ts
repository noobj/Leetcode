function floodFill(
    image: number[][],
    sr: number,
    sc: number,
    newColor: number
): number[][] {
    return flooding(image, sr, sc, newColor);
}

interface coordinate {
    x: number;
    y: number;
}

function flooding(grid: number[][], i: number, j: number, newColor: number): number[][] {
    const queue: coordinate[] = [];
    const height = grid.length;
    const width = grid[0].length;
    const currentColor = grid[i][j];

    if (currentColor == newColor) return grid;

    queue.push({ x: i, y: j });

    while (queue.length != 0) {
        const { x, y } = queue.shift();
        grid[x][y] = newColor;
        if (x - 1 >= 0 && grid[x - 1][y] == currentColor) {
            queue.push({ x: x - 1, y: y });
        }

        if (x + 1 < height && grid[x + 1][y] == currentColor) {
            queue.push({ x: x + 1, y: y });
        }

        if (y - 1 >= 0 && grid[x][y - 1] == currentColor) {
            queue.push({ x: x, y: y - 1 });
        }

        if (y + 1 < width && grid[x][y + 1] == currentColor) {
            queue.push({ x: x, y: y + 1 });
        }
    }

    return grid;
}

function main() {
    const hrstart = process.hrtime();
    console.log(
        floodFill(
            [
                [1, 1, 1],
                [1, 1, 0],
                [1, 0, 1]
            ],
            1,
            1,
            2
        )
    );
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
