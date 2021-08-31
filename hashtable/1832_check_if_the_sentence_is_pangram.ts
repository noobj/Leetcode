function checkIfPangram(sentence: string): boolean {
    const set = new Set();
    for (let i = 0; i < sentence.length; i++) set.add(sentence[i]);

    return set.size == 26;
}

function main() {
    const hrstart = process.hrtime();
    console.log(checkIfPangram('thequickbrownxjumpsoverthelazydog'));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
