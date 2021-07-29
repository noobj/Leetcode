function dummyfunction() {
}

function main() {
    const hrstart = process.hrtime();
    console.log(dummyfunction());
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
