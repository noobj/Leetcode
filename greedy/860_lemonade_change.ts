function lemonadeChange(bills: number[]): boolean {
    let twenties = 0;
    let tens = 0;
    let fives = 0;

    for (let i = 0; i < bills.length; i++) {
        let changeNeed = bills[i] - 5;

        while (changeNeed >= 20 && twenties) {
            changeNeed -= 20;
            twenties--;
        }

        while (changeNeed >= 10 && tens) {
            changeNeed -= 10;
            tens--;
        }

        while (changeNeed >= 5 && fives) {
            changeNeed -= 5;
            fives--;
        }

        if (changeNeed != 0) return false;

        switch (bills[i]) {
            case 5:
                fives++;
                break;
            case 10:
                tens++;
                break;
            case 20:
                twenties++;
                break;
        }
    }

    return true;
}

function main() {
    const hrstart = process.hrtime();
    console.log(lemonadeChange([5,5,10]));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
