function numIslands(grid: string[][]): number {
    const height = grid.length;
    const width = grid[0].length;
    let count = 0;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] == '1') {
                grid = exploreLand(grid, i, j);
                count++;
            }
        }
    }

    return count;
}

interface coordinate {
    x: number;
    y: number;
}

function exploreLand(grid: string[][], i: number, j: number): string[][] {
    const queue: coordinate[] = [];
    const height = grid.length;
    const width = grid[0].length;
    grid[i][j] = '0';
    queue.push({ x: i, y: j });

    while (queue.length != 0) {
        const { x, y } = queue.shift();
        if (x - 1 >= 0 && grid[x - 1][y] == '1') {
            grid[x - 1][y] = '0';
            queue.push({ x: x - 1, y: y });
        }

        if (x + 1 < height && grid[x + 1][y] == '1') {
            grid[x + 1][y] = '0';
            queue.push({ x: x + 1, y: y });
        }

        if (y - 1 >= 0 && grid[x][y - 1] == '1') {
            grid[x][y - 1] = '0';
            queue.push({ x: x, y: y - 1 });
        }

        if (y + 1 < width && grid[x][y + 1] == '1') {
            grid[x][y + 1] = '0';
            queue.push({ x: x, y: y + 1 });
        }
    }

    return grid;
}

function main() {
    const grid = [
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0']
    ];
    const hrstart = process.hrtime();
    console.log(numIslands(grid));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
