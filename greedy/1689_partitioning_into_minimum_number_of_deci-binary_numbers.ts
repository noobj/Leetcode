function minPartitions(n: string): number {
    return Math.max(...n.split('').map((v) => +v));
}

function main() {
    const hrstart = process.hrtime();
    console.log(minPartitions('82734'));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
