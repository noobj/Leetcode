import { ListNode, turnNumberIntoList, printList } from '../modules/linked_list.module';

function swapPairsIterative(head: ListNode | null): ListNode | null {
    const pre = new ListNode(undefined, head);

    let preHead = pre;

    for (let i = head; i != null && i.next != null; i = i.next) {
        if (i == null || i.next == null) break;

        preHead.next = i.next;
        i.next = i.next.next;
        preHead.next.next = i;
        preHead = i;
    }

    return pre.next;
}

function swapPairs(head: ListNode | null): ListNode | null {
    const pre = new ListNode(undefined, head);

    helper(pre, head);
    return pre.next;
}

function helper(pre: ListNode, head: ListNode | null): void {
    if (head == null || head.next == null) return;

    pre.next = head.next;
    head.next = head.next.next;
    pre.next.next = head;

    helper(head, head.next);
}

function main() {
    const hrstart = process.hrtime();
    printList(swapPairs(turnNumberIntoList([1, 2, 3, 4])));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
