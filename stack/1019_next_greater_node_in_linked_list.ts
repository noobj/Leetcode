import { ListNode, turnNumberIntoList } from '../modules/linked_list.module';

type indexAndVal = {
    index: number;
    val: number;
};

function nextLargerNodes(head: ListNode | null): number[] {
    const stack: indexAndVal[] = [];
    const res = [];
    let index = 0;
    while (head != null) {
        while (stack.length != 0 && head.val > stack[stack.length - 1].val) {
            const tmp = stack.pop();
            res[tmp.index] = head.val;
        }
        stack.push({ index: index++, val: head.val });
        head = head.next;
    }

    while (stack.length != 0) {
        const tmp = stack.pop();
        res[tmp.index] = 0;
    }

    return res;
}

function main() {
    const hrstart = process.hrtime();
    console.log(nextLargerNodes(turnNumberIntoList([2, 7, 4, 3, 5])));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
