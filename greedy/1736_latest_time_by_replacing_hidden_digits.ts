function maximumTime(time: string): string {
    const split = time.split('');
    if (split[0] == '?') {
        if (split[1] != '?' && +split[1] > 3) {
            split[0] = '1';
        } else split[0] = '2';
    }

    if (split[1] == '?') {
        if (split[0] == '2') split[1] = '3';
        else split[1] = '9';
    }

    if (split[3] == '?') {
        split[3] = '5';
    }

    if (split[4] == '?') {
        split[4] = '9';
    }

    return split.join('');
}

function main() {
    const hrstart = process.hrtime();
    console.log(maximumTime('2?:?0'));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
