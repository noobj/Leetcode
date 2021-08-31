function groupThePeople(groupSizes: number[]): number[][] {
    const hashtable = new Map<number, number[]>();
    const result = [];
    for (let i = 0; i < groupSizes.length; i++) {
        let tmp = hashtable.get(groupSizes[i]);
        if (tmp == undefined) tmp = [];
        tmp.push(i);
        hashtable.set(groupSizes[i], tmp);
    }

    for (const v of hashtable) {
        const resultOfEachGroup = [];
        let tmp = [];

        for (let i = 0; i < v[1].length; i++) {
            if (i != 0 && i % v[0] == 0) {
                resultOfEachGroup.push(tmp);
                tmp = [];
            }
            tmp.push(v[1][i]);
        }
        resultOfEachGroup.push(tmp);

        result.push(...resultOfEachGroup);
    }

    return result;
}

function main() {
    const hrstart = process.hrtime();
    console.log(groupThePeople([2,1,3,3,3,2]));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
