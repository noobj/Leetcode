class MyCircularQueue {
    constructor(k: number) {
        this.size = 0;
        this.queue = new Array(k);
        this.front = 0;
        this.rear = -1;
    }

    private queue: number[];
    private front: number;
    private rear: number;
    private size: number;

    enQueue(value: number): boolean {
        if (this.isFull()) return false;

        this.rear = (this.rear + 1) % this.queue.length;
        this.queue[this.rear] = value;
        this.size++;
        return true;
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false;

        this.front = (this.front + 1) % this.queue.length;
        this.size--;

        return true;
    }

    Front(): number {
        return this.isEmpty() ? -1 : this.queue[this.front];
    }

    Rear(): number {
        return this.isEmpty() ? -1 : this.queue[this.rear];
    }

    isEmpty(): boolean {
        return this.size == 0;
    }

    isFull(): boolean {
        return this.size == this.queue.length;
    }

    print(): void {
        console.log(this.queue, this.front, this.rear, this.size);
    }
}

function execute(queue: MyCircularQueue, method: string[], args: number[][]) {
    return method.map((v, k) => {
        return queue[v](args[k][0]);
    });
}

function main() {
    const hrstart = process.hrtime();
    const cq = new MyCircularQueue(23);
    const str = 'isEmpty';
    console.log(
        execute(
            cq,
            [
                'enQueue',
                'deQueue',
                'enQueue'
            ],
            [[69], [], [92]]
        )
    );
    cq.print();
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
