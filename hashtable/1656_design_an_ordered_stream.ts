class OrderedStream {
    private ptr;
    private length;
    private hashtable: Map<number, string>;

    constructor(n: number) {
        this.length = n;
        this.hashtable = new Map<number, string>();
        this.ptr = 1;
    }

    insert(idKey: number, value: string): string[] {
        const result = [];
        this.hashtable.set(idKey, value);

        while (this.ptr <= this.length && this.hashtable.has(this.ptr)) {
            result.push(this.hashtable.get(this.ptr));
            this.ptr++;
        }

        return result;
    }
}

function main() {
    const hrstart = process.hrtime();
    const os = new OrderedStream(5);
    console.log(os.insert(3, 'ccccc')); // Inserts (3, "ccccc"), returns [].
    console.log(os.insert(1, 'aaaaa')); // Inserts (1, "aaaaa"), returns ["aaaaa"].
    console.log(os.insert(2, 'bbbbb')); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
    console.log(os.insert(5, 'eeeee')); // Inserts (5, "eeeee"), returns [].
    console.log(os.insert(4, 'ddddd')); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].

    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
