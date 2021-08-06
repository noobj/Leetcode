import { ListNode, turnNumberIntoList } from '../modules/linked_list.module';

function detectCycle(head: ListNode | null): ListNode | null {
    if (head == null) return null;
    const hashmap = [];

    for (let i = head; i != null; i = i.next) {
        if (hashmap.indexOf(i) != -1) return i;
        hashmap.push(i);
    }

    return null;
}

function main() {
    const hrstart = process.hrtime();
    const list = turnNumberIntoList([3, 2, 0, -4]);
    let tmp1 = list;
    while (tmp1.next != null) tmp1 = tmp1.next;
    tmp1.next = list.next.next;

    console.log(detectCycle(list));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
