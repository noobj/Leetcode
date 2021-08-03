import { ListNode, turnNumberIntoList } from '../modules/linked_list.module';

function findTheWinner(n: number, k: number): number {
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    const list = turnNumberIntoList(arr);

    let tmp = list;
    while (tmp.next != null) tmp = tmp.next;

    tmp.next = list;

    return helper(list, k).val;
}

function helper(head: ListNode, k: number): ListNode {
    if (head.next === head) return head;

    for (let i = 1; i < k; i++) {
        head = head.next;
    }

    head.val = head.next.val;
    head.next = head.next.next;
    return helper(head, k);
}

function main() {
    const hrstart = process.hrtime();
    console.log(findTheWinner(8, 8));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
