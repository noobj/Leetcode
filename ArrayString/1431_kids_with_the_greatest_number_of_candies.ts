function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const result: boolean[] = [];
    let max = 0;

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max) max = candies[i];
    }

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) result.push(true);
        else result.push(false);
    }

    return result;
}

function main() {
    const candies = [2, 3, 5, 1, 3];
    const extraCandies = 3;
    const hrstart = process.hrtime();
    console.log(kidsWithCandies(candies, extraCandies));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
