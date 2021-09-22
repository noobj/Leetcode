type priceAndSpan = {
    price: number;
    span: number;
};

class StockSpanner {
    private stack: priceAndSpan[];

    constructor() {
        this.stack = [];
    }

    next(price: number): number {
        let span = 1;

        for (let i = this.stack.length - 1; i >= 0; i--) {
            if (this.stack[i].price > price) break;

            const tmp = this.stack.pop();
            span += tmp.span;
        }

        this.stack.push({ price, span });

        return span;
    }
}

function main() {
    const hrstart = process.hrtime();
    const stockSpanner = new StockSpanner();
    console.log(stockSpanner.next(100)); // return 1
    console.log(stockSpanner.next(80)); // return 1
    console.log(stockSpanner.next(60)); // return 1
    console.log(stockSpanner.next(70)); // return 2
    console.log(stockSpanner.next(60)); // return 1
    console.log(stockSpanner.next(75)); // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
    console.log(stockSpanner.next(85)); // return 6
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
