class RecentCounter {
    private queue: number[];
    constructor() {
        this.queue = [];
    }

    ping(t: number): number {
        this.queue.push(t);

        while (this.queue[0] < t - 3000) {
            console.log(this.queue[0]);
            this.queue.shift();
        }

        return this.queue.length;
    }
}

function main() {
    const hrstart = process.hrtime();
    const obj = new RecentCounter();
    console.log(obj.ping(1));
    console.log(obj.ping(100));
    obj.ping(3001);
    console.log(obj.ping(3002));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
